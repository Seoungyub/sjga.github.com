<?
$captcha = $_POST['g-recaptcha-response'];
$secretKey = '6LdF3HkbAAAAAHjkIjS7AiKE4UCPxOBo0Fw1MuC1';
$ip = $_SERVER['REMOTE_ADDR'];

$data = array(
  'secret' => $secretKey,
  'response' => $captcha,
  'ip' => $ip
);
$parameter = http_build_query($data);
$url = "https://www.google.com/recaptcha/api/siteverify?".$parameter;

$response = file_get_contents($url);
$responseKeys = json_decode($response, true);

if ($responseKeys["success"]) {
  echo '캡챠 성공';
	echo '<br/>';
	echo '가입을 진행하세요.';
} else {
  	echo '<script>
			alert(\'가입실패\');
			history.go(-1);
		  </script>';
}
?>