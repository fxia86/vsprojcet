using System.Data;
using Dapper;
using Tuquan.Model;

namespace Tuquan.Manager
{
    public class SystemManager
    {
        IDbConnection conn = DBConnection.MySql();
        public SysUser Login(string account, string pwd)
        {
            string querySql = "select UserID,Name,TenantID,TenantName from SysUser where Account=@Account and Pwd=@Pwd";
            return conn.QueryFirstOrDefault<SysUser>(querySql, new { account, pwd });
        }
    }
}
