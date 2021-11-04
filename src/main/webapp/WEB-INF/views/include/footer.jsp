<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<footer>
	<div class="footerInner">
		<ul class="sns">
			<li class="insta"><a href="https://www.instagram.com/ensoi__/"
				target="_blank"><i class="fab fa-instagram"></i></a></li>
			<li class="naver"><a
				href="https://store.naver.com/accommodations/detail?entry=plt&id=31549635&query=%EC%97%94%EC%86%8C%EC%9D%B4%ED%8E%9C%EC%85%98"
				target="_blank"><i class="fas fa-map-marker-alt"></i></a></li>
			<li class="facebook"><a
				href="https://www.facebook.com/ensoihouse/" target="_blank"> <i
					class="fab fa-facebook"></i></a></li>
		</ul>
		<hr class="hr" />
		<div class="info">
			<p>
				<span>자바펜션</span>
			</p>
			<p>
				<span>주소</span> 인천광역시 중구 을왕동 730-2
			</p>
			<p>
				<span>문의</span> 010-1234-5678
			</p>
			<p>
				<span>사업자등록번호</span> 123-45-67899
			</p>
			<p>
				<span>입금계좌</span> 티에스(아이은행) 123-45-67891-0
			</p>
		</div>
	</div>
	<!--footerWrap-->
</footer>
</div>
<!-- Channel Plugin Scripts -->
<script>
	(function() {
		var w = window;
		if (w.ChannelIO) {
			return (window.console.error || window.console.log || function() {
			})('ChannelIO script included twice.');
		}
		var ch = function() {
			ch.c(arguments);
		};
		ch.q = [];
		ch.c = function(args) {
			ch.q.push(args);
		};
		w.ChannelIO = ch;
		function l() {
			if (w.ChannelIOInitialized) {
				return;
			}
			w.ChannelIOInitialized = true;
			var s = document.createElement('script');
			s.type = 'text/javascript';
			s.async = true;
			s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
			s.charset = 'UTF-8';
			var x = document.getElementsByTagName('script')[0];
			x.parentNode.insertBefore(s, x);
		}
		if (document.readyState === 'complete') {
			l();
		} else if (window.attachEvent) {
			window.attachEvent('onload', l);
		} else {
			window.addEventListener('DOMContentLoaded', l, false);
			window.addEventListener('load', l, false);
		}
	})();
	ChannelIO('boot', {
		"pluginKey" : "4dd5c014-0cf1-4699-b697-908dc918876f" //please fill with your plugin key
	});
</script>
<!-- End Channel Plugin -->

</body>
</html>
