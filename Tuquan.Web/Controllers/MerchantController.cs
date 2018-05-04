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

        public JsonResult SaveMerchant(LoginUser loginUser, Merchant merchant)
        {
            merchant.TenantID = loginUser.TenantID;
            var imgStringIdx = merchant.SignBoard.IndexOf(',');
            if (imgStringIdx > 0)
            {
                merchant.SignBoard = General.Base64StringToImg(merchant.SignBoard.Substring(imgStringIdx + 1), merchant.TenantID + "/" + merchant.ID);
            }
            imgStringIdx = merchant.Licence.IndexOf(',');
            if (imgStringIdx > 0)
            {
                merchant.Licence = General.Base64StringToImg(merchant.Licence.Substring(imgStringIdx + 1), merchant.TenantID + "/" + merchant.ID);
            }
            var result = _merchant.UpdateMerchant(merchant);
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult DeleteMerchant(LoginUser loginUser, string ID)
        {
            var result = _merchant.DeleteMerchant(ID);
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetMerchantServiceList(LoginUser loginUser, PagingCriteria pagingCriteria, string merchantID)
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
            var imgStringIdx = merchantService.PicUrl.IndexOf(',');
            if (imgStringIdx > 0)
            {
                merchantService.PicUrl = General.Base64StringToImg(merchantService.PicUrl.Substring(imgStringIdx + 1), merchantService.TenantID + "/" + merchantService.MerchantID);
            }
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

        public JsonResult DeleteMerchantService(LoginUser loginUser, string ID)
        {
            var result = _merchant.DeleteMerchantService(ID);
            return Json(result, JsonRequestBehavior.AllowGet);
        }
    }
}