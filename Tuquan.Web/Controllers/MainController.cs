using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Tuquan.Security;
using Tuquan.Common;

namespace Tuquan.Web.Controllers
{
    public class MainController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public PartialViewResult Left(LoginUser loginuser)
        {
            return PartialView();
        }

        [UserAuthorize]
        public PartialViewResult Top(LoginUser loginuser)
        {
            string[] weekdays = { "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" };
            string week = weekdays[Convert.ToInt32(DateTime.Now.DayOfWeek)];
            string date = DateTime.Now.ToString("yyyy年MM月dd日");
            ViewBag.date = date + "  " + week;
            ViewBag.name = loginuser.Name;

            return PartialView();
        }


        public ActionResult LogOut()
        {
            General.ClearTicket();
            return Redirect("/");
        }
    }
}