<?php
error_reporting(E_ALL & ~ E_DEPRECATED & ~ E_USER_DEPRECATED & ~ E_NOTICE);
header("Access-Control-Allow-Origin: *"); //すべてのアクセスを許可

require('dbconnect.php');

$groupsName =  $_REQUEST['groups'];
if($groupsName == 'all'){
    //データベースから取得(グループ検索すべて)
    $posts = $db->prepare('SELECT * FROM lovelivedatabase');
    $posts->execute();
}else{
    //データベースから取得(グループ検索)
    $posts = $db->prepare('SELECT * FROM lovelivedatabase WHERE groups LIKE ?');
    $posts->bindParam(1, $groupsName, PDO::PARAM_STR, 12);
    $posts->execute();
}

$grade =  $_REQUEST['grade'];
if($grade){
    //データベースから取得(学年検索)
    $posts = $db->prepare('SELECT * FROM lovelivedatabase WHERE grade LIKE ?');
    $posts->bindParam(1, $grade, PDO::PARAM_INT);
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
// 配列をJSON形式に変換してくれる
//日本語の時はJSON_UNESCAPED_UNICODEを付ける
// JSON_UNESCAPED_SLASHES　参考 https://wordpress.ideacompo.com/?p=11102
// https://qiita.com/kiyc/items/afb51bce546af3e18594

// rest api https://docs.phalcon.io/3.4/ja-jp/tutorial-rest
// json ビュアー https://lab.syncer.jp/Tool/JSON-Viewer/
exit();
?>
