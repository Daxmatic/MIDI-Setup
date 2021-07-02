const Max = require("max-api");
//Max.post('test123');

Max.addHandler('input', (dir) => {
    Max.post(`Received ${dir}`);
    if (dir === '2600') {
        //Max.post('max midi portoffset outnum 2600 0');
        //let mys=";
        let als="max midi portenable 2600 3 1";
        let yes="max midi portabbrev 2600 3 16";
        let yess="max midi portabbrev 2600 3 16";
        let mys="max midi portoffset outnum 2600 3 16";
        //Max.outlet(`${mys}`);
        Max.outlet(als);
        //Max.outlet(yes);
        //Max.outlet(yess);
        //Max.outlet(mys);
        
    } else if (dir === 'X-USB') {
        Max.post('X-USB');
    } else if (dir === 'from Max 2') {
            Max.post('asefasefasdf');
    } else if (dir === 'AU DLS Synth 1') {
        Max.post('AU DLS Synth 1');
    } else if (dir === 'E-MU XMidi1x1 Nidi Out ') {
        Max.post('E-mu out');
    } 
    //Max.post('got shit');
    //Max.outlet(`${dir}`);
    //        Max.outlet(["\; max clearmaxwindow"]);
});
