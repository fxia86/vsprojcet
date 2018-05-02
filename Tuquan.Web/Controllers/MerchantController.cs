using System.Web.Mvc;
using Tuquan.Manager;
using Tuquan.Model;
using Tuquan.Security;

namespace Tuquan.Web.Controllers
{
    [UserAuthorize]
    public class MerchantController : Controller
    {
        MerchantManager _merchant = new MerchantManager();
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult GetMerchantList(LoginUser loginUser, PagingCriteria pagingCriteria)
        {
            pagingCriteria.sWhere += " and TenantID = " + loginUser.TenantID;
            var result = _merchant.GetMerchantList(pagingCriteria);
            return Json(new
            {
                sEcho = pagingCriteria.sEcho,
                iTotalDisplayRecords = pagingCriteria.iTotalRowNum,
                aaData = result != null ? result : ""
            }, JsonRequestBehavior.AllowGet);
        }
    }
}