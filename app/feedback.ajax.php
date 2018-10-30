<?
include("data.php");
$subject="Отправить работу другу с сайтаTemac";

$htmlstr="<p>Имя: <b>".clearData($_POST['name'])."</b></p>
<p>Телефон: <b>".clearData($_POST['email'])."</b></p>
<h3>Друг:</h3>
<p>Фамилия: <b>".clearData($_POST['friend-surname'])."</b></p>
<p>Имя: <b>".clearData($_POST['friend-name'])."</b></p>
<p>E-mail: <b>".clearData($_POST['friend-email'])."</b></p>";

if (!empty(clearData($_POST['msg']))) {
	$htmlstr .= "<p>Cообщение: ".clearData($_POST['msg'])."</p>";
};


$body = '<html>
    <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <style>
        p{
        	margin: 0
        }
        h3{
        	margin-top: 15px;
        	padding-top: 0;
        	margin-bottom: 0;
        }
        </style>
	</head>
	<body>
        '.
        $htmlstr.
    '</body></html>';



@mail($email,$subject,$body,"From:$email\r\nContent-type: text/html; charset=utf-8\r\nContent-Transfer-Encoding: 8bit\r\n");
?>	