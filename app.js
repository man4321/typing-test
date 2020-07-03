$(document).ready(function () {
    setTimeout(() => {
        $('#popup').toggle(500);
        document.getElementById('popup').style.display = "block";

    }, 1000)

    const testData = [`Use the Popup Maker Admin Toolbar to perform this step

Select the Popup Maker icon in the admin toolbar, then select Popups from the drop-down menu. A side
menu will display all popups set to 'published' status, and activated to appear on the page loaded in
the browser.

Make sure that your browser is open to a page on which a popup is targeted to display. A popup can be
set to Publish, yet not appear in the toolbar popup list. If popup targeting is set to not load a popup
on a specific page, the popup will not be listed on the toolbar.

Confirm the publication status of a popup on the All Popups admin page.

Popup Maker (menu) >>
All Popups (submenu) >>
Name (primary column) >>
{name-of-popup}
Hover over the name of the popup to display the Quick Edit menu option. Select 'Quick Edit' and inspect
the 'Status' field.

If a popup is published and does not appear in the Toolbar list, open the popup editor and go to the
Popup Settings (box) >> Targeting (option tab) to inspect the popup targeting.

The easiest way to resolve targeting conditions that may interfere with the display of a popup is to
remove all conditions (restore plugin default). Then add back one set of conditions at a time, and use
the toolbar to check that the popup is listed (activated) on a given page or post.

Once a popup is listed on the Admin Toolbar, it can be previewed using the toolbar menu options.

Related article: 'Targeting' option settings

Related article: Conditions Introduction`, `Paragraphs are distinct blocks of text which section out a larger piece of writing—stories,
novels, articles, creative writing or professional writing pieces—making it easier to read and
understand. Good paragraphs are a handy writing skill for many forms of literature, and good writers can
greatly enhance the readability of their news, essays, or fiction writing when constructed properly.`, `some text for typing speed test`]

    document.getElementById('input').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            let name = document.getElementById('input').value;
            if (name === "") {
                name = "YourName"
            }
            x = name[0].toUpperCase();
            name = name.slice(1, name.length);
            name = x + name;
            console.log(name[0].toUpperCase())
            document.getElementById('name').innerText = "Welcome " + name;
            document.getElementById('popMain').remove();
        }
    });

    let btn = document.getElementById('submit');
    btn.addEventListener('click', () => {
        let name = document.getElementById('input').value;
        if (name === "") {
            name = "YourName"
        }
        x = name[0].toUpperCase();
        name = name.slice(1, name.length);
        name = x + name;
        console.log(name[0].toUpperCase())
        document.getElementById('name').innerText = "Welcome " + name;
        document.getElementById('popMain').remove();

    });
    let result = 0;
    let backspaces = 0;
    let latters = 0;
    let i = 0;
    let x = [];
    let input = document.getElementById('user');
    let arrayOfTest;
    let addText = document.getElementsByClassName('item');
    console.log(addText)
    Array.from(addText).forEach((element) => {
        console.log(element.id)
        element.addEventListener('click', function (e) {
            console.log(e.target.id);
            document.getElementById('place').innerText = testData[e.target.id];
            arrayOfTest = Array.from(testData[e.target.id].split(" "));
            // console.log(currentTest)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
            input.value = '';
            i = 0;

        });

    });

    let startTimer = false;
    
    input.addEventListener('click',()=>{
        while(true){

            let span = document.createElement('span');
            span.contentEditable=true;
            span.addEventListener('keypress',(e)=>{
                if(e.keyCode==32){
                    
                    input.appendChild(span);
                }
            })
        };
        })
    

    // if(currentTest!=undefined){

    //  let arrayOfTest = Array.from(currentTest.split(' '));
    // }
    // input.addEventListener('keydown', (e) => {
    //     startTimer = true;
    //     if(e.keyCode===32){
    //         let span = document.createElement('span');
    //         span.textContent = input.textContent;
    //         input.appendChild(span);
    //         console.log(span);
    //         input.textContent="";
    //     }


    //     // console.log(e.keyCode);
    //     // if (e.key=== "Backspace") {
    //     //     e.preventDefault();
    //     //     e.keyCode=0;    
    //     //     // console.log('backspace pressed.');
    //     //     // return false;
    //     //     return e.keyCode; 

    //     // }

    //     if (e.keyCode === 32) {
    //         x = Array.from(input.textContent.split(" "));

    //         console.log(x);
    //         // console.log(currentTest[i],x[x.length-1],i);



    //         if (x[x.length - 1] == arrayOfTest[i]) {
                
    //             // let span = document.createElement('span');
    //             // span.textContent = " "+x[x.length-1];
    //             // span.style.color="green";
    //             // input.style.color = 'green';
    //             i++;
    //             latters++;

    //         }
    //         else {
    //             // let span = document.createElement('span');
    //             // span.textContent = " "+x[x.length-1];
    //             // span.style.color="red";
    //             // input.append(span);
    //             // input.style.color = "red";
    //             i++;


    //         }

    //     };
    // })
    let time = document.getElementById('select');
    let timersTime = time.value;

    time.addEventListener('change', () => {
        timersTime = time.value;
    })

    input.addEventListener('keypress', () => {
        if (startTimer === true) {
            console.log("animation")

            $('#timerLine').animate({ width: '1285px' }, time.value * 60000);

            // document.getElementById('popupBody').innerHTML = popupResult;

        }

    })
    let curr = new Date();
    // let minute = curr.getMinutes();
    let second = curr.getSeconds();
    second = second + time.value * 60;
    let showResult = time.value * 60;
    if (startTimer == true) {

        let intervel = setInterval(Newfun, 1000);

        function Newfun() {
            showResult--;
            console.log(showResult);
            if (showResult == 0) {
                alert("your Speed: " + result + '\nBackspace' + backspaces);
                clearInterval(intervel);
            };

        }
    }


    // If time reached then result popup....



    // console.log(popMain.id)


    //  let okay = document.getElementById('ok');
    function okay() {
        let popupBody = document.getElementById('popupBody');
        console.log("inside")
        popupBody.innerHTML = "";
    }


});











