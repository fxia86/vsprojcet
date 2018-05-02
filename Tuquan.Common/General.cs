using System;
using System.Threading;
using System.Web;
using System.Web.Security;

namespace Tuquan.Common
{
    public class General
    {

        public static string GenerateUniqueID()
        {
            Thread.Sleep(1);
            Random d = new Random(BitConverter.ToInt32(Guid.NewGuid().ToByteArray(), 0));
            string strUnique = DateTime.Now.ToString("yyyyMMddHHmmssffff") + d.Next(1000, 9999);
            return strUnique;
        }

        public static void AddTicket(string strLoginName, string strUserData)
        {
            try
            {
                FormsAuthentication.SetAuthCookie(strUserData, true, FormsAuthentication.FormsCookiePath);
                DateTime dtExpires = DateTime.Now.AddMinutes(60);
                FormsAuthenticationTicket Ticket = new FormsAuthenticationTicket(1, strLoginName, DateTime.Now, dtExpires, false, strUserData, FormsAuthentication.FormsCookiePath);
                string hash = FormsAuthentication.Encrypt(Ticket);
                HttpCookie cookie = new HttpCookie(FormsAuthentication.FormsCookieName, hash) { Expires = Ticket.Expiration };
                if (HttpContext.Current.Response.Cookies.Get(".TQ") != null) HttpContext.Current.Response.Cookies.Remove(".TQ");
                HttpContext.Current.Response.Cookies.Add(cookie);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public static void ClearTicket()
        {
            HttpCookie cookie = HttpContext.Current.Response.Cookies[FormsAuthentication.FormsCookieName];
            if (cookie != null)
            {
                cookie = new HttpCookie(FormsAuthentication.FormsCookieName);
                HttpContext.Current.Response.Cookies.Add(cookie);
                FormsAuthentication.SignOut();
            }
            cookie.Expires = DateTime.Now.AddYears(-10);
        }
    }
}
