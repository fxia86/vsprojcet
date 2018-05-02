using System.Data;
using Dapper;
using Tuquan.Model;

namespace Tuquan.Manager
{
    public class MerchantManager
    {
        IDbConnection conn = DBConnection.MySql();
        public object GetMerchantList(PagingCriteria pagingCriteria)
        {
            pagingCriteria.tabName = "Merchant";
            pagingCriteria.sColumns = "*";
            pagingCriteria.SortColumn = "ID";
            pagingCriteria.SortType = "desc";
            return Paging.GetPagingData<Merchant>(pagingCriteria); ;
        }

    }
}
