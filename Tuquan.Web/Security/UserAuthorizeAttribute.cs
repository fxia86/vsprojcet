using System;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace Tuquan.Security
{
    public class UserAuthorizeAttribute : FilterAttribute, IAuthorizationFilter, IActionFilter
    {
        public LoginUser _loginUser;

        public UserAuthorizeAttribute()
        {
        }

        public virtual void OnAuthorization(AuthorizationContext filterContext)
        {
            string area = (filterContext.RouteData.Values["area"] ?? string.Empty).ToString();
            string controller = filterContext.RouteData.Values["controller"].ToString();
            string action = filterContext.RouteData.Values["action"].ToString();

            string userData = string.Empty;
            _loginUser = null;

            if (filterContext.HttpContext.User.Identity.IsAuthenticated)
            {
                HttpCookie authCookie = filterContext.HttpContext.Request.Cookies[FormsAuthentication.FormsCookieName];
                if (authCookie != null)
                {
                    FormsAuthenticationTicket authTicket = FormsAuthentication.Decrypt(authCookie.Value);
                    userData = authTicket.UserData;
                    if (!string.IsNullOrEmpty(userData))
                    {
                        string[] arrUserData = userData.Split(',');
                        _loginUser = new LoginUser();
                        _loginUser.UserID = arrUserData[0];
                        _loginUser.Name = arrUserData[1];
                        _loginUser.TenantID = arrUserData[2];
                        _loginUser.TenantName = arrUserData[3];
                    }
                }
                if (!IsAllowed(area, controller, action))
                {
                    filterContext.RequestContext.HttpContext.Response.Redirect("~/");
                    filterContext.RequestContext.HttpContext.Response.End();
                }
            }
            else
            {
                if (filterContext.HttpContext.Request.IsAjaxRequest())
                {
                    filterContext.HttpContext.Response.StatusCode = 401;
                    filterContext.Result = new JsonResult
                    {
                        Data = "您长时间没有操作，或已登录其他帐号，请重新登录！",
                        JsonRequestBehavior = JsonRequestBehavior.AllowGet
                    };
                }
                else
                {
                    filterContext.RequestContext.HttpContext.Response.Redirect("~/");
                }
                filterContext.RequestContext.HttpContext.Response.End();
            }


        }
        public void OnActionExecuted(ActionExecutedContext filterContext)
        {
            if (filterContext.HttpContext.User.Identity.IsAuthenticated)
            {
                filterContext.Controller.ViewBag.currentUser = _loginUser;
            }
        }

        public void OnActionExecuting(ActionExecutingContext filterContext)
        {
            if (filterContext.ActionParameters.ContainsKey("loginUser"))
            {
                filterContext.ActionParameters["loginUser"] = _loginUser;
            }
        }

        public bool IsAllowed(string area, string controller, string action)
        {
            bool isAllowed = false;
            if (!string.IsNullOrEmpty(controller) && !string.IsNullOrEmpty(action))
            {
                if (HttpContext.Current.User.Identity.IsAuthenticated)
                {
                    isAllowed = true;
                }
            }
            return isAllowed;
        }
    }


    public class LoginUser
    {
        public string UserID { get; set; }
        public string Name { get; set; }
        public string TenantID { get; set; }
        public string TenantName { get; set; }
    }

}