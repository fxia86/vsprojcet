using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tuquan.Model
{
    public class Merchant
    {
        public string TenantID { get; set; }

        public string ID { get; set; }

        public string Name { get; set; }

        public string Owner { get; set; }

        public string Phone { get; set; }

        public string Address { get; set; }

        public int Discount { get; set; }

        public string SignBoard { get; set; }

        public string Lisence { get; set; }
    }
}
