const Max = require("max-api");
//Max.post('test123');


const setMidi = (...args) => {
    m="max";
    mi="midi";
    pe="portenable";
    pa="portabbrev";
    po="portoffset";
    inn="innum";
    out="outnum";
    //mc=0;
    //os=0;
    let dir= `${d}`;
    s1=[m,mi,pe,dir,1,0];
    s2=[m,mi,pe,dir,1,1];
    s3=[m,mi,pa,inn,dir,os];
    s4=[m,mi,pa,out,dir,os];
    s5=[m,mi,po,inn,dir,mc];
    s6=[m,mi,po,out,dir,mc];
    com=[s1,s2,s3,s4,s5,s6];
    for (const x of (com)) {
        Max.outlet(x);
        console.log(x);
         
        //Max.outlet(x,mc,os);
    };

};

//TODO make function

Max.addHandler('input', (dir) => {
    //Max.post(`Received ${dir}`);

    if (dir === '2600') {
        /*
        arp=dir.toString();
        s1=[m,mi,pe,arp,1,0];
        s2=[m,mi,pe,arp,1,1];
        s3=[m,mi,pa,inn,arp,2];
        s4=[m,mi,pa,out,arp,2];
        s5=[m,mi,po,inn,arp,16];
        s6=[m,mi,po,out,arp,16];
        com=[s1,s2,s3,s4,s5,s6];
        for (const x of (com)) { 
            Max.outlet(x);
            */
        mc=2;
        os=16;
        d=dir;
        setMidi(d,2,16);
        Max.post("posttttt",dir,mc,os);
    
        
    } else if (dir === 'MODEL D') {
        mc=32;
        os=3;
        //setMidi(dir,mc,os);
    } else if (dir === 'from Max 2') {
            //Max.post('asefasefasdf');
    } else if (dir === 'AU DLS Synth 1') {
        //Max.post('AU DLS Synth 1');
    } else if (dir === 'E-MU XMidi1x1 Nidi Out ') {
        //Max.post('E-mu out');
    } 
    //Max.post('got shit');
    //Max.outlet(`${dir}`);
    //        Max.outlet(["\; max clearmaxwindow"]);
});
