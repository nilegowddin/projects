document.addEventListener("DOMContentLoaded", function() {
let boxes=document.querySelectorAll(".btn");
let clr=document.querySelector(".clr");
let msg=document.querySelector("#winner");
let newgame=document.querySelector("#new");
let count=0;

var pl1=true;

var chances=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
boxes.forEach((item)=>
{

	item.addEventListener("click",()=>
	{

		count++;
console.log(count)
if(count==9)
	{
		msg.innerText="The Match is  Draw"
	}
		if(pl1)
		{
			item.innerText="O";
			pl1=false;

		}
		else
		{
			item.innerText="X";
			pl1=true;
		}
		
		checkwinner();
	})



clr.addEventListener("click",()=>{
			 item.innerText="";
			 count=0;
			 msg.innerText="";
			 

})


	newgame.addEventListener("click",()=>{
			 item.innerText="";
			 boxes.forEach((item)=>
	{
		item.disabled=false;
		msg.innerText='';
		newgame.style.visibility="hidden";
		count=0;


	});


})

});

const  showinner=(winner)=>
{
msg.innerText=`congradulation player ${winner} won the match`;
newgame.style.visibility="visible";
}


const disablebox=()=>
{
	boxes.forEach((item)=>
	{
		item.disabled=true;
	});
}




const checkwinner=()=>
{
	for(let pattern of chances)
	{
		let pos1=boxes[pattern[0]].innerText;
		let pos2=boxes[pattern[1]].innerText;
		let pos3=boxes[pattern[2]].innerText;

		if(pos1!=""&&pos2!=""&&pos3!="")
		{
			if(pos1===pos2&&pos2===pos3)
			{
				console.log("winner");
				showinner(pos1);
				disablebox();
			}


		}

	}
}



});