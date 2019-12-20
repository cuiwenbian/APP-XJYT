const appUpdate = {

  /**
   * 下载更新
   */
  downUpdate() {
    // 下载wgt文件
    var wgtUrl = '更新版本地址';
    plus.nativeUI.showWaiting('正在下载更新...');
    plus.downloader.createDownload(wgtUrl, {filename: '_doc/update/'}, function (d, status) {
      if (status == 200) {
        // 下载成功
        appUpdate.installWgt(d.filename); // 安装wgt包
      } else {
        // 下载失败
        plus.nativeUI.alert('下载更新失败！');
      }
      plus.nativeUI.closeWaiting();
    }).start();
  },


  /**
   * 安装更新文件
   */
  installWgt(path) {
    plus.nativeUI.showWaiting('安装更新...');
    plus.runtime.install(path, {}, function () {
      plus.nativeUI.closeWaiting();
      console.log('安装更新成功！');
      plus.nativeUI.alert('应用资源更新完成！', function () {
        plus.runtime.restart();
      });
    }, function (e) {
      plus.nativeUI.closeWaiting();
      plus.nativeUI.alert('安装更新失败[' + e.code + ']：' + e.message);
    });
  }
};
export default appUpdate;