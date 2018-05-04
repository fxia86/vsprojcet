using System;
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
            return Paging.GetPagingData<Merchant>(pagingCriteria);
        }


        public bool UpdateMerchant(Merchant merchant)
        {
            string querySql = "update Merchant set Name=@Name,Owner=@Owner,Phone=@Phone,Address=@Address,Discount=@Discount,SignBoard=@SignBoard,Licence=@Licence where ID=@ID";
            return conn.Execute(querySql, merchant) > 0;

        }


        public object DeleteMerchant(string ID)
        {
            string querySql = "delete from MerchantService where MerchantID=@ID;delete from Merchant where ID=@ID;";
            return conn.Execute(querySql, new { ID = ID }) > 0;
        }


        public object GetMerchantServiceList(PagingCriteria pagingCriteria)
        {
            pagingCriteria.tabName = "MerchantService";
            pagingCriteria.sColumns = "*";
            pagingCriteria.SortColumn = "ID";
            pagingCriteria.SortType = "desc";
            return Paging.GetPagingData<MerchantService>(pagingCriteria);
        }

        public bool AddMerchantService(MerchantService merchantService)
        {
            string querySql = "insert into MerchantService(TenantID,ID,MerchantID,Name,Classify,PicUrl,Price,Description) " +
                "values (@TenantID,@ID,@MerchantID,@Name,@Classify,@PicUrl,@Price,@Description)";
            return conn.Execute(querySql, merchantService) > 0;
        }

        public bool UpdateMerchantService(MerchantService merchantService)
        {
            string querySql = "update MerchantService set Name=@Name,Classify=@Classify,PicUrl=@PicUrl,Price=@Price,Description=@Description where ID=@ID";
            return conn.Execute(querySql, merchantService) > 0;
        }

        public bool DeleteMerchantService(string ID)
        {
            string querySql = "delete from MerchantService where ID=@ID";
            return conn.Execute(querySql, new { ID = ID }) > 0;
        }


    }
}
