using System.Web;
using System.Web.Optimization;

namespace Control.Center
{
    public class BundleConfig
    {

        public static string AppDir = "app";

        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {

#if DEBUG
            BundleTable.EnableOptimizations = false;
#endif

            AddVendorBundles(bundles);
            AddAppBundles(bundles);
            bundles.IgnoreList.Ignore("*Spec.js");
            bundles.IgnoreList.Ignore("*intellisense.js");
            bundles.IgnoreList.Ignore("*.map");
            bundles.IgnoreList.Ignore("*vsdoc.js");
            bundles.IgnoreList.Ignore("*mocks.js");
            bundles.IgnoreList.Ignore("*.ts");
            bundles.IgnoreList.Ignore("*scenario.js");
        }

        private static void AddAppBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/app/css").Include("~/Content/site.css"));
            bundles.Add(new StyleBundle("~/animation").IncludeDirectory("~/animation/","*.css"));

            var appSelected = "app";

            bundles.Add(new ScriptBundle("~/appScripts")
            .Include("~/" + appSelected + "/app.module.js")
                .Include("~/" + appSelected + "/app.core.module.js")
                .IncludeDirectory("~/" + appSelected, "*.module.js", true)
                .IncludeDirectory("~/" + appSelected, "*.service.js", true)
                .Include("~/" + appSelected + "/app.values.js")
                .IncludeDirectory("~/" + appSelected, "*.controller.js", true)
                .IncludeDirectory("~/" + appSelected, "*.directive.js", true)
                .Include("~/" + appSelected + "/app/app.module.js")
                .IncludeDirectory("~/" + appSelected, "*.js", true));
        }

        private static void AddVendorBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/vendor/css")
                .Include("~/Content/bootstrap.css")
                .Include("~/Content/angular-ui.css")
                .Include("~/Content/angular-gridster.min.css")
                .Include("~/Content/animation.css")
                .Include("~/Content/angular-chart.css"));

            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/vendor/js")
                .Include("~/Scripts/jquery-{version}.js")
                .Include("~/Scripts/jquery.*")
                .Include("~/Scripts/bootstrap.js")
                .Include("~/Scripts/Chart.js")
                .Include("~/Scripts/angular.js")
                .Include("~/Scripts/angular-*")
                .Include("~/Scripts/angular-ui/ui-bootstrap.js")
                .Include("~/Scripts/angular-ui/ui-bootstrap-tpls.js")
                .Include("~/Scripts/marked.js")
                .Include("~/Scripts/respond.js")
                .Include("~/Scripts/select2.js")
                .Include("~/Scripts/flot/jquery.flot.js")
                .IncludeDirectory("~/Scripts/flot", "*.js")
                .Include("~/Scripts/angle-flot.js")
                );
        }
    }
}
