using System;
using System.Data;
using Tuquan.Model;
using Dapper;
using System.Collections.Generic;

namespace Tuquan.Manager
{
    public class Paging
    {
      static  IDbConnection conn = DBConnection.MySql();
        public static object GetPagingData<T>(PagingCriteria PagingCriteria) where T : class, new()
        {
            GetPagingCount(PagingCriteria);

            if (PagingCriteria.iTotalRowNum == 0) return null;

            string querySql = string.Format("Select {0} From {1} Where {2} Order By {3} {4} limit {5},{6}"
                , PagingCriteria.sColumns, PagingCriteria.tabName, PagingCriteria.sWhere, PagingCriteria.SortColumn, PagingCriteria.SortType,
                PagingCriteria.PageStart, PagingCriteria.PageSize);

            return conn.Query<T>(querySql).AsList();
        }

     
        private static void GetPagingCount(PagingCriteria PagingCriteria)
        {
            string strSql = string.Format("Select Count(1) From {0} Where {1}"
                , PagingCriteria.tabName, PagingCriteria.sWhere);

            PagingCriteria.iTotalRowNum = conn.QueryFirst<Int32>(strSql);
        }
    }

}
