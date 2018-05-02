using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Tuquan.Web.Startup))]
namespace Tuquan.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
