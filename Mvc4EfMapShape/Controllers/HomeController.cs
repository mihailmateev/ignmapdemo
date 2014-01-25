using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.Spatial;
//using Microsoft.SqlServer.Types;

//using System.Runtime.Serialization.Json;
//using System.Runtime.Serialization;
using Newtonsoft.Json;



namespace Mvc4EfSpatialDemo.Controllers
{
    #region HomeController
    public class HomeController : Controller
    {
        #region Fields

        NorthwindEntities nw = new NorthwindEntities();

        SpatialDemoEntities spDemo = new SpatialDemoEntities();

        #endregion //Fields

        #region Methods

        #region Index
        public ActionResult Index()
        {
            //ViewBag.Message = "Spatial Data & Entity Framework";

            return View();
        }
        #endregion //Index

        #region DashboardJs
        public ActionResult DashboardJs()
        {
            //ViewBag.Message = "Spatial Data Dashboard";

            return View();
        }
        #endregion //DashboardJs

        #region About
        public ActionResult About()
        {
            //ViewBag.Message = "Ignite UI Map & SQL Spatial.";

            return View();
        }
        #endregion //About

        #region Contact
        public ActionResult Contact()
        {
            //ViewBag.Message = "Your contact page.";

            //ViewBag.Message = "Contact Author.";

            return View();
        }
        #endregion //Contact

        #region Customers
        public JsonResult Customers()
        {

            return Json(nw.Customers, JsonRequestBehavior.AllowGet);
        }
        #endregion //Customers

        #region CountryByName
        [OutputCache(VaryByParam = "countryName", Duration = 120)]
        public JsonResult CountryByName(string countryName)
        {
            switch (countryName)
            {
                case "UK":
                    countryName = "United Kingdom";
                    break;
                case "USA":
                    countryName = "United States";
                    break;
            }
            var results = spDemo.worlds.Where(x => x.CNTRY_NAME == countryName);


            List<CountryInfo> ret = new List<CountryInfo>();
            foreach (world country in results)
            {
                CountryInfo info = new CountryInfo
                {
                    Id = country.ID,
                    Code = country.CODE,
                    CountryName = country.CNTRY_NAME,
                    Population = country.POP_CNTRY,
                    Extend = GetGeometryBoundary(country),
                    Center = GetGeometryCentroid(country),
                    ShapeData = GetGeometryPoints(country)
                };

                ret.Add(info);
            }

            var retVal = Json(ret, JsonRequestBehavior.AllowGet);
            return retVal;
        }
        #endregion //CountryByName

        #region GetGeometryBoundary
        public static SpatialRect GetGeometryBoundary(world country)
        {
            List<SpatialPoint> multiPoints = new List<SpatialPoint>();
            var numPoints = country.geom.Envelope.ElementAt(1).PointCount;
            
            for (int i = 1; i <= numPoints; i++)
            {
                SpatialPoint pnt = new SpatialPoint((double)(country.geom.Envelope.ElementAt(1).PointAt(i).XCoordinate), (double)(country.geom.Envelope.ElementAt(1).PointAt(i).YCoordinate));
                multiPoints.Add(pnt);

            }
            SpatialRect rect = multiPoints.GetBounds();
            return rect;
        }
        #endregion //GetGeometryBoundary

        #region GetGeometryCentroid
        public static Object GetGeometryCentroid(world country)
        {
            SpatialPoint center = null;
            var geometry = country.geom;
            if (geometry != null)
            {

                center = new SpatialPoint((double)geometry.Centroid.XCoordinate, (double)geometry.Centroid.YCoordinate);
            }


            return new  {x =  center.X, y = center.Y};
        }
        #endregion //GetGeometryCentroid

        #region GetGeometryPoints

        public static List<SpatialPoints> GetGeometryPoints(world country)
        {
            List<SpatialPoints> multiPolygonPoints = new List<SpatialPoints>();
            var numElements = country.geom.ElementCount;

            for (int i = 1; i <= numElements; i++)
            {
                SpatialPoints spatialPoints = new SpatialPoints();
                var currElem = country.geom.ElementAt(i);
                if (null != currElem.PointCount)
                {
                    spatialPoints.Points.Add(new List<object>());
                    int numPoints = (int)currElem.PointCount;

                    for (int j = 1; j <= numPoints; j++)
                    {
                        double x = (double)currElem.PointAt(j).XCoordinate;
                        double y = (double)currElem.PointAt(j).YCoordinate;
                        //SpatialPoint point = new SpatialPoint(x, y);
                        spatialPoints.Points[0].Add(new { x = x, y = y });
                    }
                }

                multiPolygonPoints.Add(spatialPoints);

            }

            return multiPolygonPoints;
        }

        #endregion GetGeometryPoints

        #region Orders
        [OutputCache(VaryByParam = "userID", Duration = 120)]
        public JsonResult Orders(string userID)
        {
            return Json(nw.Orders.Where(p => p.CustomerID == userID), JsonRequestBehavior.AllowGet);
        }
        #endregion //Orders


        #endregion //Methods
    }
    #endregion //HomeController

    #region CountryInfo

    public class CountryInfo
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public string CountryName { get; set; }
        public long? Population { get; set; }
        public SpatialRect Extend { get; set; }
        public Object Center { get; set; }
        //Polygon Shape
        public List<SpatialPoints> ShapeData { get; set; }
 
    }
    #endregion //CountryInfo

    #region SpatialPoint

    public class SpatialPoint
    {
        public SpatialPoint(double x, double y)
        {
            this.X = x;
            this.Y = y;
        }

        public double X { get; set; }
        public double Y { get; set; }
    }

    #endregion //SpatialPoint

    #region SpatialPoints

    public class SpatialPoints
    {
        public SpatialPoints()
        {
            this.Points = new List<List<Object>>();
        }

        public List<List<Object>> Points { get; set; }

    }

    #endregion //SpatialPoints

    #region SpatialRect

    public struct SpatialRect
    {
        public SpatialRect(double pLeft, double pTop, double pWidth, double pHeight)
        {
            left = pLeft;
            top = pTop;
            width = pWidth;
            height = pHeight;
        }

        public double left; 
        public double top; 
        public double width; 
        public double height; 
    }

    #endregion //SpatialRect

    #region Extensions
    public static class Extensions
    {

        #region GetBounds
        public static SpatialRect GetBounds(this IList<SpatialPoint> points)
        {
            double xmin = Double.PositiveInfinity;
            double ymin = Double.PositiveInfinity;
            double xmax = Double.NegativeInfinity;
            double ymax = Double.NegativeInfinity;

            SpatialPoint p;
            for (var i = 0; i < points.Count; i++)
            {
                p = points[i];
                xmin = Math.Min(xmin, p.X);
                ymin = Math.Min(ymin, p.Y);

                xmax = Math.Max(xmax, p.X);
                ymax = Math.Max(ymax, p.Y);
            }

            if (Double.IsInfinity(xmin) || Double.IsInfinity(ymin) || Double.IsInfinity(ymin) || Double.IsInfinity(ymax))
            {
                return new SpatialRect(0.0, 0.0, 0.0, 0.0);
            }

            return new SpatialRect(xmin, ymin, xmax - xmin, ymax - ymin);
        }
        #endregion //GetBounds
    } 
    #endregion //Extensions

}
