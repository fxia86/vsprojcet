using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tuquan.Model
{
    public class SysUser
    {
        public string UserID { get; set; }

        public string Account { get; set; }

        public string Pwd { get; set; }

        public string Name { get; set; }

        public string TenantID { get; set; }

        public string TenantName { get; set; }
    }
}
