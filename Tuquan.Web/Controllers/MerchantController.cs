using System.Web.Mvc;
using Tuquan.Common;
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

        public JsonResult GetMerchantList(LoginUser loginUser, PagingCriteria pagingCriteria, string name)
        {
            if (!string.IsNullOrEmpty(name))
            {
                pagingCriteria.sWhere += string.Format(" and Name like '%{0}%'", name);
            }
            pagingCriteria.sWhere += " and TenantID = " + loginUser.TenantID;
            var result = _merchant.GetMerchantList(pagingCriteria);

            return Json(new
            {
                sEcho = pagingCriteria.sEcho,
                iTotalDisplayRecords = pagingCriteria.iTotalRowNum,
                aaData = result != null ? result : ""
            }, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetMerchantServiceList(LoginUser loginUser, PagingCriteria pagingCriteria,string merchantID)
        {
            pagingCriteria.sWhere += " and TenantID = " + loginUser.TenantID;
            pagingCriteria.sWhere += " and MerchantID = " + merchantID;
            var result = _merchant.GetMerchantServiceList(pagingCriteria);
            return Json(new
            {
                sEcho = pagingCriteria.sEcho,
                iTotalDisplayRecords = pagingCriteria.iTotalRowNum,
                aaData = result != null ? result : ""
            }, JsonRequestBehavior.AllowGet);
        }

        public JsonResult SaveMerchantService(LoginUser loginUser, MerchantService merchantService)
        {
            var result = false;
            merchantService.TenantID = loginUser.TenantID;
            if (string.IsNullOrEmpty(merchantService.ID))
            {
                merchantService.ID = General.GenerateUniqueID();
                result = _merchant.AddMerchantService(merchantService);
            }
            else
            {
                result = _merchant.UpdateMerchantService(merchantService);
            }
            return Json(result, JsonRequestBehavior.AllowGet);
        }
    }
}