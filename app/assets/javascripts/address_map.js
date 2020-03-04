// urlの後ろに記述してあるコールバック
function initMap(){
  
  let target = document.querySelector('#map');
  let address = document.querySelector('#address').textContent;
  // geocoderを初期化。住所情報を緯度・経度の座標に変換してくれる
  let geocoder = new google.maps.Geocoder();

  // geocoder.geocodeで定義。address。geocodeの結果はresultオブジェクトに格納される
  geocoder.geocode({address: address},function(results,status){
    // ステータスがokの場合
    if (status == 'OK'){
      // 地図情報の作成。画面上の地図情報を選択し、中央とズーム値を指定
      map = new google.maps.Map(target,{
        center: results[0].geometry.location,
        zoom: 18
      });

      // マーカーの作成
      let marker = new google.maps.Marker({
        position: results[0].geometry.location,
        map: map,
        animation: google.maps.Animation.DROP
      });

    }else{
      alert('失敗しました。理由: ' + status);
      return;
    }
  });
}
