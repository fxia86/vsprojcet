using System.Web;
using System.Web.Optimization;

namespace Tuquan.Web
{
    public class BundleConfig
    {
        // 有关绑定的详细信息，请访问 http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                      "~/Resource/bootstrap/plugins/jquery-1.10.2.min.js",
                      "~/Resource/bootstrap/plugins/jquery-migrate-1.2.1.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap/core").Include(
                      "~/Resource/bootstrap/plugins/jquery-ui/jquery-ui-1.10.3.custom.min.js",
                      "~/Resource/bootstrap/plugins/bootstrap/js/bootstrap.min.js",

                      "~/Resource/bootstrap/plugins/jquery-slimscroll/jquery.slimscroll.min.js",
                      "~/Resource/bootstrap/plugins/jquery.blockui.min.js",
                      "~/Resource/bootstrap/plugins/jquery.cokie.min.js",
                      "~/Resource/bootstrap/uniform/jquery.uniform.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap/plugin").Include(
                     "~/Resource/bootstrap/plugins/jquery.pulsate.min.js",
                     "~/Resource/bootstrap/plugins/bootstrap-daterangepicker/moment.min.js",
                     "~/Resource/bootstrap/plugins/bootstrap-daterangepicker/daterangepicker.js",
                     "~/Resource/bootstrap/plugins/jquery.sparkline.min.js",
                     "~/Resource/bootstrap/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js",
                     "~/Resource/bootstrap/plugins/bootstrap-timepicker/js/bootstrap-timepicker.js",
                     "~/Resource/bootstrap/plugins/jquery.bootpag.min.js",
                      "~/Resource/bootstrap/plugins/select2/select2.js",
                      "~/Resource/bootstrap/plugins/select2/select2_locale_zh-CN.js",
                      "~/Resource/bootstrap/plugins/data-tables/jquery.dataTables.js",
                      "~/Resource/bootstrap/plugins/data-tables/DT_bootstrap.js",
                      "~/Resource/bootstrap/plugins/bootstrap/js/bootstrap.js",
                      "~/Resource/bootstrap/plugins/data-tables/AjaxDataTable.js",
                      "~/Resource/bootstrap/plugins/jquery-bootpag/jquery.bootpag.min.js",
                      "~/Resource/bootstrap/plugins/jquery-validation/dist/jquery.validate.js",
                      "~/Resource/bootstrap/plugins/bootstrap-toastr/toastr.js"
                     ));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap/custom").Include(
                      "~/Resource/bootstrap/scripts/custom.js",
                      "~/Resource/bootstrap/scripts/app.js"));

            bundles.Add(new StyleBundle("~/global/css").Include(
                      "~/Resource/bootstrap/plugins/font-awesome/css/font-awesome.css",
                      "~/Resource/bootstrap/plugins/bootstrap/css/bootstrap.min.css",
                      "~/Resource/bootstrap/plugins/uniform/css/uniform.default.css"));

            bundles.Add(new StyleBundle("~/plugin/css").Include(
                      "~/Resource/bootstrap/plugins/bootstrap-daterangepicker/daterangepicker-bs3.css",
                      "~/Resource/bootstrap/plugins/bootstrap-datepicker/css/datepicker.css",
                      "~/Resource/bootstrap/plugins/data-tables/DT_bootstrap.css",
                      "~/Resource/bootstrap/plugins/bootstrap-datetimepicker/css/datetimepicker.css"));

            bundles.Add(new StyleBundle("~/theme/css").Include(
                      "~/Resource/bootstrap/css/style-metronic.css",
                      "~/Resource/bootstrap/css/style.css",
                      "~/Resource/bootstrap/css/style-responsive.css",
                      "~/Resource/bootstrap/css/plugins.css",
                      "~/Resource/bootstrap/css/themes/default.css",
                      "~/Resource/bootstrap/css/custom.css",
                      "~/Resource/bootstrap/plugins/select2/select2.css",
                      "~/Resource/bootstrap/plugins/select2/select2_metro.css",
                      "~/Resource/bootstrap/plugins/bootstrap-toastr/toastr.css",
                      "~/Resource/bootstrap/css/zTreeStyle.css"
                      ));
        }
    }
}
