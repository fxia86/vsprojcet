using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tuquan.Model
{
    public class PagingCriteria
    {
        private string _TableName;
        private string _Condition = " 1=1 ";
        private int _PageSize = 10;
        private int _PageIndex = 1;
        private string _Columns = "*";
        private string _SortColumn = "ID";
        private string _SortType;
        private int _CountRows;
        private int _CountPage;
        private int _PageStart;
        private int _PageEnd;

        private string _sEcho;
        private int _iDisplayStart;
        private string _sSearch;
        private string _sSortColNames;
        private string _sSortDir = "asc";

        /// <summary>
        /// DataTable请求服务器端次数
        /// </summary>       
        public string sEcho
        {
            get { return _sEcho; }
            set { _sEcho = value; }
        }

        /// <summary>
        /// 表名
        /// </summary>
        public string tabName
        {
            get { return _TableName; }
            set { _TableName = value; }
        }

        /// <summary>
        /// 条件
        /// </summary>
        public string sWhere
        {
            get
            { return _Condition; }
            set { _Condition = value; }
        }

        /// <summary>
        /// 过滤文本
        /// </summary>
        public string sSearch
        {
            get { return _sSearch; }
            set { _sSearch = value; }
        }

        /// <summary>
        /// 查询字段
        /// </summary>
        public string sColumns
        {
            get { return _Columns; }
            set { _Columns = value; }
        }

        /// <summary>
        /// 排序字段
        /// </summary>
        public string SortColumn
        {
            get
            {
                if (_SortColumn == "ID" && !string.IsNullOrEmpty(_sSortColNames))
                {
                    _SortColumn = _sSortColNames.Split(',')[iSortCol_0];
                }
                return _SortColumn;
            }
            set { _SortColumn = value; }
        }

        /// <summary>
        /// 排序类型
        /// </summary>
        public string SortType
        {
            get
            {
                if (string.IsNullOrEmpty(_SortType))
                {
                    _SortType = sSortDir_0;
                }
                return _SortType;
            }
            set { _SortType = value; }
        }

        /// <summary>
        /// 排序字段 多个用逗号分隔
        /// </summary>
        public string sSortColNames
        {
            get { return _sSortColNames; }
            set { _sSortColNames = value; }
        }

        /// <summary>
        /// 当前排序的列序号
        /// </summary>
        public int iSortCol_0 { get; set; }

        /// <summary>
        /// 当前排序的类型 Asc or Desc
        /// </summary>
        public string sSortDir_0
        {
            get { return _sSortDir; }
            set { _sSortDir = value; }
        }

        /// <summary>
        /// 当前页
        /// </summary>
        public int PageIndex
        {
            get { return _PageIndex; }
            set { _PageIndex = value; }
        }

        /// <summary>
        /// 分页时每页跨度数量
        /// </summary>
        public int iDisplayStart
        {
            get { return _iDisplayStart; }
            set { _iDisplayStart = value; }
        }

        /// <summary>
        /// 每页数量
        /// </summary>
        public int iDisplayLength
        {
            get { return _PageSize; }
            set { _PageSize = value; }
        }

        public int PageSize
        {
            get { return _PageSize; }
            set { _PageSize = value; }
        }

        /// <summary>
        /// 总记录数
        /// </summary>
        public int iTotalRowNum
        {
            get { return _CountRows; }
            set { _CountRows = value; }
        }

        /// <summary>
        /// 开始页
        /// </summary>
        public int PageStart
        {
            get
            {
                if (iDisplayStart == 0)
                {
                    this._PageStart = (_PageIndex - 1) * _PageSize;
                }
                else
                {
                    this._PageStart = iDisplayStart;
                }
                return _PageStart;
            }
        }

        /// <summary>
        /// 结束页
        /// </summary>
        public int PageEnd
        {
            get
            {
                this._PageEnd = _PageStart + iDisplayLength - 1;

                return _PageEnd;
            }
        }

        /// <summary>
        /// 总页数
        /// </summary>
        public int CountPage
        {
            get
            {
                if ((iTotalRowNum % iDisplayLength) == 0)
                    this._CountPage = (int)iTotalRowNum / iDisplayLength;
                else
                    this._CountPage = ((int)iTotalRowNum / iDisplayLength) + 1;
                return _CountPage;
            }
        }
    }

}
