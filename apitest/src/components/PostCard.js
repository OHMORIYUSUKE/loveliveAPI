
const PostCard =(props)=>{
  
  return (
    <>
        <p>{props.name}</p>
        <p>CV:{props.CV}</p>
        <p>{props.grade}年生</p>
        <p>{props.birthday}生まれ</p>
        <p>{props.bloodType}型</p>
        <p>{props.height}cm</p>
        <img style={{width:'200px'}} src={props.image} alt='画像'/>
    </>
  );
}

export default PostCard;
