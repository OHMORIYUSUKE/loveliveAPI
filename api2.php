<?php
error_reporting(E_ALL & ~ E_DEPRECATED & ~ E_USER_DEPRECATED & ~ E_NOTICE);
header("Access-Control-Allow-Origin: *"); //すべてのアクセスを許可

require('dbconnect.php');

$groups =  $_REQUEST['groups'];
$grade =  $_REQUEST['grade'];
$bloodType =  $_REQUEST['bloodType'];

// リクエストチェック関数
function checkRequest($request){
    if(!$request){
        $request = '%';
    }
    return $request;
}

$groups = checkRequest($groups);
$grade = checkRequest($grade);
$bloodType = checkRequest($bloodType);

if($groups && $grade && $bloodType){
    //データベースから取得(絞り込み検索)
    $posts = $db->prepare('SELECT * FROM lovelivedatabase WHERE groups LIKE ? AND grade LIKE ? AND bloodType LIKE ?');
    $posts->bindParam(1, $groups, PDO::PARAM_STR, 12);
    $posts->bindParam(2, $grade, PDO::PARAM_STR, 12);
    $posts->bindParam(3, $bloodType, PDO::PARAM_STR, 12);
    $posts->execute();
}

$id =  $_REQUEST['id'];
if($id){
    //データベースから取得(id指定)
    $posts = $db->prepare('SELECT * FROM lovelivedatabase WHERE id=?');
    $posts->bindParam(1, $id, PDO::PARAM_INT);
    $posts->execute();
}

$json = array();

foreach($posts as $post):
    array_push($json,array( 'id'=>$post['id'],
                            'groups'=>$post['groups'],
                            'name'=>$post['name'],
                            'grade'=>$post['grade'],
                            'birthday'=>$post['birthday'],
                            'bloodType'=>$post['bloodType'],
                            'height'=>$post['height'],
                            'B'=>$post['B'],
                            'W'=>$post['W'],
                            'H'=>$post['H'],
                            'CV'=>$post['CV'],
                            'description'=>$post['description'],
                            'image'=>$post['image']
                        ));
endforeach;
 
header("Content-Type: text/javascript; charset=utf-8");
print(json_encode($json, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE));
exit();
?>
