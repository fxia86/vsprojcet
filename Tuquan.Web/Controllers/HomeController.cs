using System.Web.Mvc;
using Tuquan.Common;
using Tuquan.Manager;

namespace Tuquan.Web.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Login(string account, string pwd)
        {
            SystemManager _system = new SystemManager();
            //登录
            var user = _system.Login(account, pwd);
            //判断是否登录成功
            if (user != null)
            {
                //加入票据
                General.AddTicket(account,string.Format("{0},{1},{2},{3}",user.UserID,user.Name,user.TenantID,user.TenantName));
                return Redirect(string.Format("/main"));
                //return Redirect(string.Format("{0}.xiafeng.xyz/main", user.TenantName));
            }
            else
            {
                Response.Write("<script>alert('帐号密码不对哦！');location.href='/';</script>");
                Response.End();
                return null;
            }
        }
    }
}