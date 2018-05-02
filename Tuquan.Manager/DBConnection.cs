using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Configuration;
using System.Data.Common;

namespace Tuquan.Manager
{
    public class DBConnection
    {
        private static string _connectionString;
        public static SqlConnection Sql(string connectionString = "")
        {
            _connectionString = string.IsNullOrEmpty(connectionString) ? ConfigurationManager.ConnectionStrings[1].ToString() : connectionString;
            return new SqlConnection(connectionString);
        }

        public static MySqlConnection MySql(string connectionString = "")
        {
            _connectionString = string.IsNullOrEmpty(connectionString) ? ConfigurationManager.ConnectionStrings[1].ToString() : connectionString;
            return new MySqlConnection(_connectionString);
        }
    }
}
