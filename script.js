function getFormvalue() {
    //Write your code here
	let fName = document.querySelectorAll("input")[0].value.trim();
    let lName = document.querySelectorAll("input")[1].value.trim();

    alert(`${fName} ${lName}`);
	
}
