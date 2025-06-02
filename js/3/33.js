	// Definition der Variablen fÃ¼r das Formular
    var Zahn_33 = 1;
    var Implantat_33 = 0;
    var BOP_33_db = 0;
    var BOP_33_b = 0;
    var BOP_33_mb = 0;
    var PI_33_db = 0;
    var PI_33_b = 0;
    var PI_33_mb = 0;
    var BOP_33_dl = 0;
    var BOP_33_l = 0;
    var BOP_33_ml = 0;
    var PI_33_dl = 0;
    var PI_33_l = 0;
    var PI_33_ml = 0;
    var mg_33_db = 0;
    var mg_33_b = 0;
    var mg_33_mb = 0;
    var st_33_db = 0;
    var st_33_b = 0;
    var st_33_mb = 0;
    var mg_33_dl = 0;
    var mg_33_l = 0;
    var mg_33_ml = 0;
    var st_33_dl = 0;
    var st_33_l = 0;
    var st_33_ml = 0;

function clear_data_33() {
    if (Zahn_33 == 1) {
        mg_33_db = 0;
        mg_33_b = 0;
        mg_33_mb = 0;
        st_33_db = 0;
        st_33_b = 0;
        st_33_mb = 0;

            document.getElementById('mg_33_db_txt').value = 0;
            document.getElementById('mg_33_b_txt').value = 0;
            document.getElementById('mg_33_mb_txt').value = 0;
            
            document.getElementById('st_33_db_txt').value = 0;
            document.getElementById('st_33_b_txt').value = 0;
            document.getElementById('st_33_mb_txt').value = 0;
        
            document.forms[0]["st_33_db"].style.color = 'black'
            document.forms[0]["st_33_b"].style.color = 'black'
            document.forms[0]["st_33_mb"].style.color = 'black'
        
        mg_33_dl = 0;
        mg_33_l = 0;
        mg_33_ml = 0;
        st_33_dl = 0;
        st_33_l = 0;
        st_33_ml = 0;

            document.getElementById('mg_33_dl_txt').value = 0;
            document.getElementById('mg_33_l_txt').value = 0;
            document.getElementById('mg_33_ml_txt').value = 0;
            
            document.getElementById('st_33_dl_txt').value = 0;
            document.getElementById('st_33_l_txt').value = 0;
            document.getElementById('st_33_ml_txt').value = 0;

            document.forms[0]["st_33_dl"].style.color = 'black'
            document.forms[0]["st_33_l"].style.color = 'black'
            document.forms[0]["st_33_ml"].style.color = 'black'
        
        change_probing_33();
        
        mobility_33 = 0;

            document.getElementById('mobility_33_txt').value = "0";

        note_33 = "";

            document.getElementById('note_33_txt').value = "";

        BOP_33_db = 0;
        BOP_33_b = 0;
        BOP_33_mb = 0;
                
        BOP_33_dl = 0;
        BOP_33_l = 0;
        BOP_33_ml = 0;
                
            document.getElementById('BOP_33_db_rectangle').style.display = 'none';
            document.getElementById('BOP_33_b_rectangle').style.display = 'none';
            document.getElementById('BOP_33_mb_rectangle').style.display = 'none';
                
            document.getElementById('BOP_33_dl_rectangle').style.display = 'none';
            document.getElementById('BOP_33_l_rectangle').style.display = 'none';
            document.getElementById('BOP_33_ml_rectangle').style.display = 'none';
            
        PI_33_db = 0;
        PI_33_b = 0;
        PI_33_mb = 0;
                
        PI_33_dl = 0;
        PI_33_l = 0;
        PI_33_ml = 0;

            document.getElementById('PI_33_db_rectangle').style.display = 'none';
            document.getElementById('PI_33_b_rectangle').style.display = 'none';
            document.getElementById('PI_33_mb_rectangle').style.display = 'none';
                
            document.getElementById('PI_33_dl_rectangle').style.display = 'none';
            document.getElementById('PI_33_l_rectangle').style.display = 'none';
            document.getElementById('PI_33_ml_rectangle').style.display = 'none';
    }
}

function toggle_tooth_33() {
    if (Zahn_33 === 1) {
        Zahn_33 = 0;
        document.getElementById('tooth_line_33_b').style.display = 'block';
        document.getElementById('tooth_line_33_l').style.display = 'block';
        
        document.getElementById('mobility_33_txt').style.display = 'none';
        
        document.getElementById('implantat_33_btn').style.display = 'none';
        document.getElementById('implantat_33_tab').style.display = 'none';
        document.getElementById('implantat_33_b_image').style.display = 'none';
        document.getElementById('implantat_33_l_image').style.display = 'none';
        
        document.getElementById('mg_33_db_txt').style.display = 'none';
        document.getElementById('mg_33_b_txt').style.display = 'none';
        document.getElementById('mg_33_mb_txt').style.display = 'none';
        
        document.getElementById('st_33_db_txt').style.display = 'none';
        document.getElementById('st_33_b_txt').style.display = 'none';
        document.getElementById('st_33_mb_txt').style.display = 'none';
        
        document.getElementById('mg_33_dl_txt').style.display = 'none';
        document.getElementById('mg_33_l_txt').style.display = 'none';
        document.getElementById('mg_33_ml_txt').style.display = 'none';
        
        document.getElementById('st_33_dl_txt').style.display = 'none';
        document.getElementById('st_33_l_txt').style.display = 'none';
        document.getElementById('st_33_ml_txt').style.display = 'none';
        
        document.getElementById('BOP_33_db_rectangle').style.display = 'none';
        document.getElementById('BOP_33_b_rectangle').style.display = 'none';
        document.getElementById('BOP_33_mb_rectangle').style.display = 'none';
        
        document.getElementById('BOP_33_dl_rectangle').style.display = 'none';
        document.getElementById('BOP_33_l_rectangle').style.display = 'none';
        document.getElementById('BOP_33_ml_rectangle').style.display = 'none';
        
        document.getElementById('BOP_33_db_btn').style.display = 'none';
        document.getElementById('BOP_33_b_btn').style.display = 'none';
        document.getElementById('BOP_33_mb_btn').style.display = 'none';
        
        document.getElementById('BOP_33_dl_btn').style.display = 'none';
        document.getElementById('BOP_33_l_btn').style.display = 'none';
        document.getElementById('BOP_33_ml_btn').style.display = 'none';
        
        document.getElementById('PI_33_db_rectangle').style.display = 'none';
        document.getElementById('PI_33_b_rectangle').style.display = 'none';
        document.getElementById('PI_33_mb_rectangle').style.display = 'none';
        
        document.getElementById('PI_33_dl_rectangle').style.display = 'none';
        document.getElementById('PI_33_l_rectangle').style.display = 'none';
        document.getElementById('PI_33_ml_rectangle').style.display = 'none';
        
        document.getElementById('PI_33_db_btn').style.display = 'none';
        document.getElementById('PI_33_b_btn').style.display = 'none';
        document.getElementById('PI_33_mb_btn').style.display = 'none';
        
        document.getElementById('PI_33_dl_btn').style.display = 'none';
        document.getElementById('PI_33_l_btn').style.display = 'none';
        document.getElementById('PI_33_ml_btn').style.display = 'none';
        
        document.getElementById('polygon_33_b').style.display = 'none';
        document.getElementById('polyline_an_33_b').style.display = 'none';
        document.getElementById('polyline_mg_33_b').style.display = 'none';
        
        document.getElementById('polygon_33_l').style.display = 'none';
        document.getElementById('polyline_an_33_l').style.display = 'none';
        document.getElementById('polyline_mg_33_l').style.display = 'none';
        
        document.getElementById('polygon_inter_34_33_b').style.display = 'none';            
        document.getElementById('polyline_an_inter_34_33_b').style.display = 'none';            
        document.getElementById('polyline_mg_inter_34_33_b').style.display = 'none';            
        
        document.getElementById('polygon_inter_34_33_l').style.display = 'none';            
        document.getElementById('polyline_an_inter_34_33_l').style.display = 'none';            
        document.getElementById('polyline_mg_inter_34_33_l').style.display = 'none';            
        
        document.getElementById('polygon_inter_33_32_b').style.display = 'none';            
        document.getElementById('polyline_an_inter_33_32_b').style.display = 'none';            
        document.getElementById('polyline_mg_inter_33_32_b').style.display = 'none';            
        
        document.getElementById('polygon_inter_33_32_l').style.display = 'none';            
        document.getElementById('polyline_an_inter_33_32_l').style.display = 'none';            
        document.getElementById('polyline_mg_inter_33_32_l').style.display = 'none';            
        
        document.getElementById('note_33_txt').style.display = 'none';
    }
    else if (Implantat_33 !== 1) {
        Zahn_33 = 1;
        document.getElementById('tooth_line_33_b').style.display = 'none';
        document.getElementById('tooth_line_33_l').style.display = 'none';

        document.getElementById('mobility_33_txt').style.display = 'block';

        document.getElementById('implantat_33_btn').style.display = 'block';

        document.getElementById('mg_33_db_txt').style.display = 'block';
        document.getElementById('mg_33_b_txt').style.display = 'block';
        document.getElementById('mg_33_mb_txt').style.display = 'block';
        
        document.getElementById('st_33_db_txt').style.display = 'block';
        document.getElementById('st_33_b_txt').style.display = 'block';
        document.getElementById('st_33_mb_txt').style.display = 'block';
        
        document.getElementById('mg_33_dl_txt').style.display = 'block';
        document.getElementById('mg_33_l_txt').style.display = 'block';
        document.getElementById('mg_33_ml_txt').style.display = 'block';
        
        document.getElementById('st_33_dl_txt').style.display = 'block';
        document.getElementById('st_33_l_txt').style.display = 'block';
        document.getElementById('st_33_ml_txt').style.display = 'block';
        
        document.getElementById('note_33_txt').style.display = 'block';

        document.getElementById('polygon_33_b').style.display = 'block';
        document.getElementById('polyline_an_33_b').style.display = 'block';
        document.getElementById('polyline_mg_33_b').style.display = 'block';
        
        document.getElementById('polygon_33_l').style.display = 'block';
        document.getElementById('polyline_an_33_l').style.display = 'block';
        document.getElementById('polyline_mg_33_l').style.display = 'block';

        if (Tooth_34 == 1 && Zahn_33 == 1) {
            document.getElementById('polygon_inter_34_33_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_34_33_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_34_33_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_34_33_l').style.display = 'block';            
            document.getElementById('polyline_an_inter_34_33_l').style.display = 'block';            
            document.getElementById('polyline_mg_inter_34_33_l').style.display = 'block';            
        }
        
        if (Zahn_33 == 1 && Zahn_32 == 1) {
            document.getElementById('polygon_inter_33_32_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_33_32_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_33_32_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_33_32_l').style.display = 'block';            
            document.getElementById('polyline_an_inter_33_32_l').style.display = 'block';            
            document.getElementById('polyline_mg_inter_33_32_l').style.display = 'block';            
        }

        document.getElementById('BOP_33_db_btn').style.display = 'block';
        document.getElementById('BOP_33_b_btn').style.display = 'block';
        document.getElementById('BOP_33_mb_btn').style.display = 'block';

        document.getElementById('BOP_33_dl_btn').style.display = 'block';
        document.getElementById('BOP_33_l_btn').style.display = 'block';
        document.getElementById('BOP_33_ml_btn').style.display = 'block';
        
        if (BOP_33_db == 1) {
            document.getElementById('BOP_33_db_rectangle').style.display = 'block';
        }
        if (BOP_33_b == 1) {
            document.getElementById('BOP_33_b_rectangle').style.display = 'block';
        }
        if (BOP_33_mb == 1) {
            document.getElementById('BOP_33_mb_rectangle').style.display = 'block';
        }
        if (BOP_33_dl == 1) {
            document.getElementById('BOP_33_dl_rectangle').style.display = 'block';
        }
        if (BOP_33_l == 1) {
            document.getElementById('BOP_33_l_rectangle').style.display = 'block';
        }
        if (BOP_33_ml == 1) {
            document.getElementById('BOP_33_ml_rectangle').style.display = 'block';
        }
        
        document.getElementById('PI_33_db_btn').style.display = 'block';
        document.getElementById('PI_33_b_btn').style.display = 'block';
        document.getElementById('PI_33_mb_btn').style.display = 'block';

        document.getElementById('PI_33_dl_btn').style.display = 'block';
        document.getElementById('PI_33_l_btn').style.display = 'block';
        document.getElementById('PI_33_ml_btn').style.display = 'block';
        
        if (PI_33_db == 1) {
            document.getElementById('PI_33_db_rectangle').style.display = 'block';
        }
        if (PI_33_b == 1) {
            document.getElementById('PI_33_b_rectangle').style.display = 'block';
        }
        if (PI_33_mb == 1) {
            document.getElementById('PI_33_mb_rectangle').style.display = 'block';
        }
        if (PI_33_dl == 1) {
            document.getElementById('PI_33_dl_rectangle').style.display = 'block';
        }
        if (PI_33_l == 1) {
            document.getElementById('PI_33_l_rectangle').style.display = 'block';
        }
        if (PI_33_ml == 1) {
            document.getElementById('PI_33_ml_rectangle').style.display = 'block';
        }
    }		
    else if (Implantat_33 == 1) {
        Zahn_33 = 1;
        document.getElementById('tooth_line_33_b').style.display = 'none';
        document.getElementById('tooth_line_33_l').style.display = 'none';

        document.getElementById('mobility_33_txt').style.display = 'block';
        
        document.getElementById('note_33_txt').style.display = 'block';

        document.getElementById('implantat_33_btn').style.display = 'block';
        document.getElementById('implantat_33_tab').style.display = 'block';
        document.getElementById('implantat_33_b_image').style.display = 'block';
        document.getElementById('implantat_33_l_image').style.display = 'block';

        document.getElementById('mg_33_db_txt').style.display = 'block';
        document.getElementById('mg_33_b_txt').style.display = 'block';
        document.getElementById('mg_33_mb_txt').style.display = 'block';
        
        document.getElementById('st_33_db_txt').style.display = 'block';
        document.getElementById('st_33_b_txt').style.display = 'block';
        document.getElementById('st_33_mb_txt').style.display = 'block';
        
        document.getElementById('mg_33_dl_txt').style.display = 'block';
        document.getElementById('mg_33_l_txt').style.display = 'block';
        document.getElementById('mg_33_ml_txt').style.display = 'block';
        
        document.getElementById('st_33_dl_txt').style.display = 'block';
        document.getElementById('st_33_l_txt').style.display = 'block';
        document.getElementById('st_33_ml_txt').style.display = 'block';

        document.getElementById('polygon_33_b').style.display = 'block';
        document.getElementById('polyline_an_33_b').style.display = 'block';
        document.getElementById('polyline_mg_33_b').style.display = 'block';
        
        document.getElementById('polygon_33_l').style.display = 'block';
        document.getElementById('polyline_an_33_l').style.display = 'block';
        document.getElementById('polyline_mg_33_l').style.display = 'block';

        if (Tooth_34 == 1 && Zahn_33 == 1) {
            document.getElementById('polygon_inter_34_33_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_34_33_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_34_33_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_34_33_l').style.display = 'block';            
            document.getElementById('polyline_an_inter_34_33_l').style.display = 'block';            
            document.getElementById('polyline_mg_inter_34_33_l').style.display = 'block';            
        }
        
        if (Zahn_33 == 1 && Zahn_32 == 1) {
            document.getElementById('polygon_inter_33_32_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_33_32_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_33_32_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_33_32_l').style.display = 'block';            
            document.getElementById('polyline_an_inter_33_32_l').style.display = 'block';            
            document.getElementById('polyline_mg_inter_33_32_l').style.display = 'block';            
        }        

        document.getElementById('BOP_33_db_btn').style.display = 'block';
        document.getElementById('BOP_33_b_btn').style.display = 'block';
        document.getElementById('BOP_33_mb_btn').style.display = 'block';

        document.getElementById('BOP_33_dl_btn').style.display = 'block';
        document.getElementById('BOP_33_l_btn').style.display = 'block';
        document.getElementById('BOP_33_ml_btn').style.display = 'block';
        
        document.getElementById('PI_33_db_btn').style.display = 'block';
        document.getElementById('PI_33_b_btn').style.display = 'block';
        document.getElementById('PI_33_mb_btn').style.display = 'block';

        document.getElementById('PI_33_dl_btn').style.display = 'block';
        document.getElementById('PI_33_l_btn').style.display = 'block';
        document.getElementById('PI_33_ml_btn').style.display = 'block';
        
        if (BOP_33_db == 1) {
            document.getElementById('BOP_33_db_rectangle').style.display = 'block';
        }
        if (BOP_33_b == 1) {
            document.getElementById('BOP_33_b_rectangle').style.display = 'block';
        }
        if (BOP_33_mb == 1) {
            document.getElementById('BOP_33_mb_rectangle').style.display = 'block';
        }
        if (BOP_33_dl == 1) {
            document.getElementById('BOP_33_dl_rectangle').style.display = 'block';
        }
        if (BOP_33_l == 1) {
            document.getElementById('BOP_33_l_rectangle').style.display = 'block';
        }
        if (BOP_33_ml == 1) {
            document.getElementById('BOP_33_ml_rectangle').style.display = 'block';
        }
        
        if (PI_33_db == 1) {
            document.getElementById('PI_33_db_rectangle').style.display = 'block';
        }
        if (PI_33_b == 1) {
            document.getElementById('PI_33_b_rectangle').style.display = 'block';
        }
        if (PI_33_mb == 1) {
            document.getElementById('PI_33_mb_rectangle').style.display = 'block';
        }
        if (PI_33_dl == 1) {
            document.getElementById('PI_33_dl_rectangle').style.display = 'block';
        }
        if (PI_33_l == 1) {
            document.getElementById('PI_33_l_rectangle').style.display = 'block';
        }
        if (PI_33_ml == 1) {
            document.getElementById('PI_33_ml_rectangle').style.display = 'block';
        }
    }
}

function toggle_implant_33() {
    if (Implantat_33 == 0) {
        Implantat_33 = 1;
        
        document.getElementById('implantat_33_b_image').style.display = 'block';
        document.getElementById('implantat_33_l_image').style.display = 'block';
        document.getElementById('implantat_33_tab').style.display = 'block';
    }
    else {
        Implantat_33 = 0;
        
        document.getElementById('implantat_33_b_image').style.display = 'none';
        document.getElementById('implantat_33_l_image').style.display = 'none';
        document.getElementById('implantat_33_tab').style.display = 'none';
    }
}

function toggle_BOP_33_db() {
    if (BOP_33_db == 0) {
        BOP_33_db = 1;
        document.getElementById('BOP_33_db_rectangle').style.display = 'block';
    }
    else {
        BOP_33_db = 0;
        document.getElementById('BOP_33_db_rectangle').style.display = 'none';
    }
}

function toggle_BOP_33_b() {
    if (BOP_33_b == 0) {
        BOP_33_b = 1;
        document.getElementById('BOP_33_b_rectangle').style.display = 'block';
    }
    else {
        BOP_33_b = 0;
        document.getElementById('BOP_33_b_rectangle').style.display = 'none';
    }
}

function toggle_BOP_33_mb() {
    if (BOP_33_mb == 0) {
        BOP_33_mb = 1;
        document.getElementById('BOP_33_mb_rectangle').style.display = 'block';
    }
    else {
        BOP_33_mb = 0;
        document.getElementById('BOP_33_mb_rectangle').style.display = 'none';
    }
}

function toggle_PI_33_db() {
    if (PI_33_db == 0) {
        PI_33_db = 1;
        document.getElementById('PI_33_db_rectangle').style.display = 'block';
    }
    else {
        PI_33_db = 0;
        document.getElementById('PI_33_db_rectangle').style.display = 'none';
    }
}

function toggle_PI_33_b() {
    if (PI_33_b == 0) {
        PI_33_b = 1;
        document.getElementById('PI_33_b_rectangle').style.display = 'block';
    }
    else {
        PI_33_b = 0;
        document.getElementById('PI_33_b_rectangle').style.display = 'none';
    }
}

function toggle_PI_33_mb() {
    if (PI_33_mb == 0) {
        PI_33_mb = 1;
        document.getElementById('PI_33_mb_rectangle').style.display = 'block';
    }
    else {
        PI_33_mb = 0;
        document.getElementById('PI_33_mb_rectangle').style.display = 'none';
    }
}

function toggle_BOP_33_dl() {
    if (BOP_33_dl == 0) {
        BOP_33_dl = 1;
        document.getElementById('BOP_33_dl_rectangle').style.display = 'block';
    }
    else {
        BOP_33_dl = 0;
        document.getElementById('BOP_33_dl_rectangle').style.display = 'none';
    }
}

function toggle_BOP_33_l() {
    if (BOP_33_l == 0) {
        BOP_33_l = 1;
        document.getElementById('BOP_33_l_rectangle').style.display = 'block';
    }
    else {
        BOP_33_l = 0;
        document.getElementById('BOP_33_l_rectangle').style.display = 'none';
    }
}

function toggle_BOP_33_ml() {
    if (BOP_33_ml == 0) {
        BOP_33_ml = 1;
        document.getElementById('BOP_33_ml_rectangle').style.display = 'block';
    }
    else {
        BOP_33_ml = 0;
        document.getElementById('BOP_33_ml_rectangle').style.display = 'none';
    }
}

function toggle_PI_33_dl() {
    if (PI_33_dl == 0) {
        PI_33_dl = 1;
        document.getElementById('PI_33_dl_rectangle').style.display = 'block';
    }
    else {
        PI_33_dl = 0;
        document.getElementById('PI_33_dl_rectangle').style.display = 'none';
    }
}

function toggle_PI_33_l() {
    if (PI_33_l == 0) {
        PI_33_l = 1;
        document.getElementById('PI_33_l_rectangle').style.display = 'block';
    }
    else {
        PI_33_l = 0;
        document.getElementById('PI_33_l_rectangle').style.display = 'none';
    }
}

function toggle_PI_33_ml() {
    if (PI_33_ml == 0) {
        PI_33_ml = 1;
        document.getElementById('PI_33_ml_rectangle').style.display = 'block';
    }
    else {
        PI_33_ml = 0;
        document.getElementById('PI_33_ml_rectangle').style.display = 'none';
    }
}

function change_probing_33() {
    if (Zahn_33 == 1) {
        
    // Variablen aus dem Formular
        st_33_db = document.forms[0]["st_33_db"].value;
        st_33_b = document.forms[0]["st_33_b"].value;
        st_33_mb = document.forms[0]["st_33_mb"].value;

        if (document.forms[0]["st_33_dl"].value > 3) {document.forms[0]["st_33_dl"].style.color = 'red';} else {document.forms[0]["st_33_dl"].style.color = 'black'};
        if (document.forms[0]["st_33_l"].value > 3) {document.forms[0]["st_33_l"].style.color = 'red';} else {document.forms[0]["st_33_l"].style.color = 'black'};
        if (document.forms[0]["st_33_ml"].value > 3) {document.forms[0]["st_33_ml"].style.color = 'red';} else {document.forms[0]["st_33_ml"].style.color = 'black'};
        
        mg_33_db = document.forms[0]["mg_33_db"].value;
        mg_33_b = document.forms[0]["mg_33_b"].value;
        mg_33_mb = document.forms[0]["mg_33_mb"].value;
        
        st_33_dl = document.forms[0]["st_33_dl"].value;
        st_33_l = document.forms[0]["st_33_l"].value;
        st_33_ml = document.forms[0]["st_33_ml"].value;

        if (document.forms[0]["st_33_db"].value > 3) {document.forms[0]["st_33_db"].style.color = 'red';} else {document.forms[0]["st_33_db"].style.color = 'black'};
        if (document.forms[0]["st_33_b"].value > 3) {document.forms[0]["st_33_b"].style.color = 'red';} else {document.forms[0]["st_33_b"].style.color = 'black'};
        if (document.forms[0]["st_33_mb"].value > 3) {document.forms[0]["st_33_mb"].style.color = 'red';} else {document.forms[0]["st_33_mb"].style.color = 'black'};
        
        mg_33_dl = document.forms[0]["mg_33_dl"].value;
        mg_33_l = document.forms[0]["mg_33_l"].value;
        mg_33_ml = document.forms[0]["mg_33_ml"].value;

    // Set der horizontalen Koordinaten von Zahn 33 (bukkal) in der Bitmap
        var x_db_33 = 787;							// distal 33
        var x_mb_33 = 766;							// mesial 33
        var x_b_33 = (x_db_33 + x_mb_33)/2;			// bukkal 33
        
    // Set der horizontalen Koordinaten von Zahn 33 (lingual) in der Bitmap
        var x_dl_33 = 787;							// distal 33
        var x_ml_33 = 767;							// mesial 33
        var x_l_33 = (x_dl_33 + x_ml_33)/2;			// lingual 33
        
    // Set der vertikalen Koordinaten von Zahn 33 (bukkal) aus dem Formular
        var y_mg_33_db = mg_UK_b - 6.05 * mg_33_db;	// Margo Gingivae distobukkal 33
        var y_mg_33_b = mg_UK_b - 6.05 * mg_33_b;	// Margo Gingivae bukkal 33
        var y_mg_33_mb = mg_UK_b - 6.05 * mg_33_mb;	// Margo Gingivae mesiobukkal 33
        var y_st_33_db = 6.05 * st_33_db;			// Sondierungstiefe distobukkal 33
        var y_st_33_b = 6.05 * st_33_b;				// Sondierungstiefe bukkal 33
        var y_st_33_mb = 6.05 * st_33_mb;			// Sondierungstiefe mesiobukkal 33
        
    // Set der vertikalen Koordinaten von Zahn 33 (lingual) aus dem Formular
        var y_mg_33_dl = mg_UK_l + 6.05 * mg_33_dl;	// Margo Gingivae distolingual 33
        var y_mg_33_l = mg_UK_l + 6.05 * mg_33_l;	// Margo Gingivae lingual 33
        var y_mg_33_ml = mg_UK_l + 6.05 * mg_33_ml;	// Margo Gingivae mesiolingual 33
        var y_st_33_dl = 6.05 * st_33_dl;			// Sondierungstiefe distolingual 33
        var y_st_33_l = 6.05 * st_33_l;				// Sondierungstiefe lingual 33
        var y_st_33_ml = 6.05 * st_33_ml;			// Sondierungstiefe mesiolingual 33
        
    // Berechnung des Attachmentniveaus 33 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_33_db = y_mg_33_db + y_st_33_db;	// Attachmentniveau distobukkal 33
        var y_an_33_b = y_mg_33_b + y_st_33_b;		// Attachmentniveau bukkal 33
        var y_an_33_mb = y_mg_33_mb + y_st_33_mb;	// Attachmentniveau mesiobukkal 33
        
    // Berechnung des Attachmentniveaus 33 (lingual) aus Margo Gingivae und Sondierungstiefe
        var y_an_33_dl = y_mg_33_dl - y_st_33_dl;	// Attachmentniveau distolingual 33
        var y_an_33_l = y_mg_33_l - y_st_33_l;		// Attachmentniveau lingual 33
        var y_an_33_ml = y_mg_33_ml - y_st_33_ml;	// Attachmentniveau mesiolingual 33
        
    // Parodontaltasche 33 bukkal zeichnen
        var string = 
            x_db_33 + ", " + y_an_33_db + "  " + 
            x_b_33 + ", " + y_an_33_b + "  " + 
            x_mb_33 + ", " + y_an_33_mb + "  " + 
            x_mb_33 + ", " + y_mg_33_mb + "  " + 
            x_b_33 + ", " + y_mg_33_b + "  " + 
            x_db_33 + ", " + y_mg_33_db;
        document.getElementById("polygon_33_b").setAttribute("points", string);
    // Attachmentniveau 33 bukkal zeichnen
        var string = 
            x_db_33 + ", " + y_an_33_db + "  " + 
            x_b_33 + ", " + y_an_33_b + "  " + 
            x_mb_33 + ", " + y_an_33_mb;
        document.getElementById("polyline_an_33_b").setAttribute("points", string);
    // Margo Gingivae 33 bukkal zeichnen
        var string =
            x_db_33 + ", " + y_mg_33_db + "  " + 
            x_b_33 + ", " + y_mg_33_b + "  " + 
            x_mb_33 + ", " + y_mg_33_mb;
        document.getElementById("polyline_mg_33_b").setAttribute("points", string);

    // Parodontaltasche 33 lingual zeichnen
        var string = 
            x_dl_33 + ", " + y_an_33_dl + "  " + 
            x_l_33 + ", " + y_an_33_l + "  " + 
            x_ml_33 + ", " + y_an_33_ml + "  " + 
            x_ml_33 + ", " + y_mg_33_ml + "  " + 
            x_l_33 + ", " + y_mg_33_l + "  " + 
            x_dl_33 + ", " + y_mg_33_dl;
        document.getElementById("polygon_33_l").setAttribute("points", string);
    // Attachmentniveau 33 lingual zeichnen
        var string = 
            x_dl_33 + ", " + y_an_33_dl + "  " + 
            x_l_33 + ", " + y_an_33_l + "  " + 
            x_ml_33 + ", " + y_an_33_ml;
        document.getElementById("polyline_an_33_l").setAttribute("points", string);
    // Margo Gingivae 33 lingual zeichnen
        var string =
            x_dl_33 + ", " + y_mg_33_dl + "  " + 
            x_l_33 + ", " + y_mg_33_l + "  " + 
            x_ml_33 + ", " + y_mg_33_ml;
        document.getElementById("polyline_mg_33_l").setAttribute("points", string);
    }
    if (Zahn_33 == 1 && Zahn_32 == 1) {

        st_32_db = document.forms[0]["st_32_db"].value;
        mg_32_db = document.forms[0]["mg_32_db"].value;
        
        st_32_dl = document.forms[0]["st_32_dl"].value;
        mg_32_dl = document.forms[0]["mg_32_dl"].value;
        
    // Set der horizontalen Koordinaten von Zahn 32 (bukkal) in der Bitmap
        var x_db_32 = 748;							// distal 32
        
    // Set der horizontalen Koordinaten von Zahn 32 (lingual) in der Bitmap
        var x_dl_32 = 751;							// distal 32
        
    // Set der vertikalen Koordinaten von Zahn 32 (bukkal) aus dem Formular
        var y_mg_32_db = mg_UK_b - 6.05 * mg_32_db;	// Margo Gingivae distobukkal 32
        var y_st_32_db = 6.05 * st_32_db;			// Sondierungstiefe distobukkal 32
        
    // Set der vertikalen Koordinaten von Zahn 32 (lingual) aus dem Formular
        var y_mg_32_dl = mg_UK_l + 6.05 * mg_32_dl;	// Margo Gingivae distolingual 32
        var y_st_32_dl = 6.05 * st_32_dl;			// Sondierungstiefe distolingual 32
        
    // Berechnung des Attachmentniveaus 32 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_32_db = y_mg_32_db + y_st_32_db;	// Attachmentniveau distobukkal 32
        
    // Berechnung des Attachmentniveaus 32 (lingual) aus Margo Gingivae und Sondierungstiefe
        var y_an_32_dl = y_mg_32_dl - y_st_32_dl;	// Attachmentniveau distolingual 32

    // Parodontaltasche inter_33_32 bukkal zeichnen
        var string = 
            x_mb_33 + ", " + y_an_33_mb + "  " + 
            x_db_32 + ", " + y_an_32_db + "  " + 
            x_db_32 + ", " + y_mg_32_db + "  " + 
            x_mb_33 + ", " + y_mg_33_mb;
        document.getElementById("polygon_inter_33_32_b").setAttribute("points", string);
    // Attachmentniveau inter_33_32 bukkal zeichnen
        var string = 
            x_mb_33 + ", " + y_an_33_mb + "  " + 
            x_db_32 + ", " + y_an_32_db;
        document.getElementById("polyline_an_inter_33_32_b").setAttribute("points", string);
    // Margo Gingivae inter_33_32 bukkal zeichnen
        var string =
            x_mb_33 + ", " + y_mg_33_mb + "  " + 
            x_db_32 + ", " + y_mg_32_db;
        document.getElementById("polyline_mg_inter_33_32_b").setAttribute("points", string);

    // Parodontaltasche inter_33_32 lingual zeichnen
        var string = 
            x_ml_33 + ", " + y_an_33_ml + "  " + 
            x_dl_32 + ", " + y_an_32_dl + "  " + 
            x_dl_32 + ", " + y_mg_32_dl + "  " + 
            x_ml_33 + ", " + y_mg_33_ml;
        document.getElementById("polygon_inter_33_32_l").setAttribute("points", string);
    // Attachmentniveau inter_33_32 lingual zeichnen
        var string = 
            x_ml_33 + ", " + y_an_33_ml + "  " + 
            x_dl_32 + ", " + y_an_32_dl;
        document.getElementById("polyline_an_inter_33_32_l").setAttribute("points", string);
    // Margo Gingivae inter_33_32 lingual zeichnen
        var string =
            x_ml_33 + ", " + y_mg_33_ml + "  " + 
            x_dl_32 + ", " + y_mg_32_dl;
        document.getElementById("polyline_mg_inter_33_32_l").setAttribute("points", string);
    }
    if (Tooth_34 == 1 && Zahn_33 == 1) {

        st_34_mb = document.forms[0]["st_34_mb"].value;
        mg_34_mb = document.forms[0]["mg_34_mb"].value;
        
        st_34_ml = document.forms[0]["st_34_ml"].value;
        mg_34_ml = document.forms[0]["mg_34_ml"].value;
        
    // Set der horizontalen Koordinaten von Zahn 34 (bukkal) in der Bitmap
        var x_mb_34 = 805;							// mesial 34
        
    // Set der horizontalen Koordinaten von Zahn 34 (lingual) in der Bitmap
        var x_ml_34 = 804;							// mesial 34
        
    // Set der vertikalen Koordinaten von Zahn 34 (bukkal) aus dem Formular
        var y_mg_34_mb = mg_UK_b - 6.05 * mg_34_mb;	// Margo Gingivae mesiobukkal 34
        var y_st_34_mb = 6.05 * st_34_mb;			// Sondierungstiefe mesiobukkal 34
        
    // Set der vertikalen Koordinaten von Zahn 34 (lingual) aus dem Formular
        var y_mg_34_ml = mg_UK_l + 6.05 * mg_34_ml;	// Margo Gingivae mesiolingual 34
        var y_st_34_ml = 6.05 * st_34_ml;			// Sondierungstiefe mesiolingual 34
        
    // Berechnung des Attachmentniveaus 34 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_34_mb = y_mg_34_mb + y_st_34_mb;	// Attachmentniveau mesiobukkal 34
        
    // Berechnung des Attachmentniveaus 34 (lingual) aus Margo Gingivae und Sondierungstiefe
        var y_an_34_ml = y_mg_34_ml - y_st_34_ml;	// Attachmentniveau mesiolingual 34

    // Parodontaltasche inter_34_33 bukkal zeichnen
        var string = 
            x_mb_34 + ", " + y_an_34_mb + "  " + 
            x_db_33 + ", " + y_an_33_db + "  " + 
            x_db_33 + ", " + y_mg_33_db + "  " + 
            x_mb_34 + ", " + y_mg_34_mb;
        document.getElementById("polygon_inter_34_33_b").setAttribute("points", string);
    // Attachmentniveau inter_34_33 bukkal zeichnen
        var string = 
            x_mb_34 + ", " + y_an_34_mb + "  " + 
            x_db_33 + ", " + y_an_33_db;
        document.getElementById("polyline_an_inter_34_33_b").setAttribute("points", string);
    // Margo Gingivae inter_34_33 bukkal zeichnen
        var string =
            x_mb_34 + ", " + y_mg_34_mb + "  " + 
            x_db_33 + ", " + y_mg_33_db;
        document.getElementById("polyline_mg_inter_34_33_b").setAttribute("points", string);

    // Parodontaltasche inter_34_33 lingual zeichnen
        var string = 
            x_ml_34 + ", " + y_an_34_ml + "  " + 
            x_dl_33 + ", " + y_an_33_dl + "  " + 
            x_dl_33 + ", " + y_mg_33_dl + "  " + 
            x_ml_34 + ", " + y_mg_34_ml;
        document.getElementById("polygon_inter_34_33_l").setAttribute("points", string);
    // Attachmentniveau inter_34_33 lingual zeichnen
        var string = 
            x_ml_34 + ", " + y_an_34_ml + "  " + 
            x_dl_33 + ", " + y_an_33_dl;
        document.getElementById("polyline_an_inter_34_33_l").setAttribute("points", string);
    // Margo Gingivae inter_34_33 lingual zeichnen
        var string =
            x_ml_34 + ", " + y_mg_34_ml + "  " + 
            x_dl_33 + ", " + y_mg_33_dl;
        document.getElementById("polyline_mg_inter_34_33_l").setAttribute("points", string);
    }
}