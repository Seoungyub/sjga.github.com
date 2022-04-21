function kakaoMap(){
	var container = document.getElementById('map');
			var options = {
				center: new kakao.maps.LatLng(36.4951814591185, 127.249257297753),
				level: 3
			};

			//지도생성
			var map = new kakao.maps.Map(container, options);

			// 마커가 표시될 위치입니다 
            var markerPosition  = new kakao.maps.LatLng(36.4951814591185, 127.249257297753); 

            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
            position: markerPosition
            }); 
	
	    // 마커가 지도 위에 표시되도록 설정합니다
            marker.setMap(map);

            // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
            // marker.setMap(null);  
	
	    // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
            var mapTypeControl = new kakao.maps.MapTypeControl();
	
	    // 컨트롤 오류로 임시 제거

            // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
            // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
            map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

            // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
            // var zoomControl = new kakao.maps.ZoomControl();
            // map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
		};
	
	
		$(function(){
			kakaoMap();
		})
