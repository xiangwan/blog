var _config = {
    blog_name       : '向晚',         // 博客名称
    owner           : 'xiangwan',           // github 用户名
    repo            : 'blog',// github 中对应项目名
    duoshuo_id      :  false,            // 在第三方评论插件多说申请站点的子域名
    access_token : 'fec595897e9aa9b1b4420c'+'1bfd2fe089e667f9a8',       // 请求量大时需要在 github 后台单独设置一个读取公开库的 token, 注意将token 拆成两个字符串，否则会被系统自动删除掉
    per_page        : '15'                    // 默认一页显示几篇文章
}

var duoshuoQuery = {short_name:_config['duoshuo_id']};
