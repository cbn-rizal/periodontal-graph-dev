	// Definition der Variablen fÃ¼r das Formular
    var Zahn_44 = 1;
    var Implantat_44 = 0;
    var BOP_44_db = 0;
    var BOP_44_b = 0;
    var BOP_44_mb = 0;
    var PI_44_db = 0;
    var PI_44_b = 0;
    var PI_44_mb = 0;
    var BOP_44_dl = 0;
    var BOP_44_l = 0;
    var BOP_44_ml = 0;
    var PI_44_dl = 0;
    var PI_44_l = 0;
    var PI_44_ml = 0;
    var mg_44_db = 0;
    var mg_44_b = 0;
    var mg_44_mb = 0;
    var st_44_db = 0;
    var st_44_b = 0;
    var st_44_mb = 0;
    var mg_44_dl = 0;
    var mg_44_l = 0;
    var mg_44_ml = 0;
    var st_44_dl = 0;
    var st_44_l = 0;
    var st_44_ml = 0;

function clear_data_44() {
    if (Zahn_44 == 1) {
        mg_44_db = 0;
        mg_44_b = 0;
        mg_44_mb = 0;
        st_44_db = 0;
        st_44_b = 0;
        st_44_mb = 0;

            document.getElementById('mg_44_db_txt').value = 0;
            document.getElementById('mg_44_b_txt').value = 0;
            document.getElementById('mg_44_mb_txt').value = 0;
            
            document.getElementById('st_44_db_txt').value = 0;
            document.getElementById('st_44_b_txt').value = 0;
            document.getElementById('st_44_mb_txt').value = 0;
        
            document.forms[0]["st_44_db"].style.color = 'black'
            document.forms[0]["st_44_b"].style.color = 'black'
            document.forms[0]["st_44_mb"].style.color = 'black'
        
        mg_44_dl = 0;
        mg_44_l = 0;
        mg_44_ml = 0;
        st_44_dl = 0;
        st_44_l = 0;
        st_44_ml = 0;

            document.getElementById('mg_44_dl_txt').value = 0;
            document.getElementById('mg_44_l_txt').value = 0;
            document.getElementById('mg_44_ml_txt').value = 0;
            
            document.getElementById('st_44_dl_txt').value = 0;
            document.getElementById('st_44_l_txt').value = 0;
            document.getElementById('st_44_ml_txt').value = 0;

            document.forms[0]["st_44_dl"].style.color = 'black'
            document.forms[0]["st_44_l"].style.color = 'black'
            document.forms[0]["st_44_ml"].style.color = 'black'
        
        change_probing_44();
        
        mobility_44 = 0;

            document.getElementById('mobility_44_txt').value = "0";

        note_44 = "";

            document.getElementById('note_44_txt').value = "";

        BOP_44_db = 0;
        BOP_44_b = 0;
        BOP_44_mb = 0;
                
        BOP_44_dl = 0;
        BOP_44_l = 0;
        BOP_44_ml = 0;
                
            document.getElementById('BOP_44_db_rectangle').style.display = 'none';
            document.getElementById('BOP_44_b_rectangle').style.display = 'none';
            document.getElementById('BOP_44_mb_rectangle').style.display = 'none';
                
            document.getElementById('BOP_44_dl_rectangle').style.display = 'none';
            document.getElementById('BOP_44_l_rectangle').style.display = 'none';
            document.getElementById('BOP_44_ml_rectangle').style.display = 'none';
            
        PI_44_db = 0;
        PI_44_b = 0;
        PI_44_mb = 0;
                
        PI_44_dl = 0;
        PI_44_l = 0;
        PI_44_ml = 0;

            document.getElementById('PI_44_db_rectangle').style.display = 'none';
            document.getElementById('PI_44_b_rectangle').style.display = 'none';
            document.getElementById('PI_44_mb_rectangle').style.display = 'none';
                
            document.getElementById('PI_44_dl_rectangle').style.display = 'none';
            document.getElementById('PI_44_l_rectangle').style.display = 'none';
            document.getElementById('PI_44_ml_rectangle').style.display = 'none';
    }
}

function toggle_tooth_44() {
    if (Zahn_44 === 1) {
        Zahn_44 = 0;
        document.getElementById('tooth_line_44_b').style.display = 'block';
        document.getElementById('tooth_line_44_l').style.display = 'block';
        
        document.getElementById('mobility_44_txt').style.display = 'none';
        
        document.getElementById('implantat_44_btn').style.display = 'none';
        document.getElementById('implantat_44_tab').style.display = 'none';
        document.getElementById('implantat_44_b_image').style.display = 'none';
        document.getElementById('implantat_44_l_image').style.display = 'none';
        
        document.getElementById('mg_44_db_txt').style.display = 'none';
        document.getElementById('mg_44_b_txt').style.display = 'none';
        document.getElementById('mg_44_mb_txt').style.display = 'none';
        
        document.getElementById('st_44_db_txt').style.display = 'none';
        document.getElementById('st_44_b_txt').style.display = 'none';
        document.getElementById('st_44_mb_txt').style.display = 'none';
        
        document.getElementById('mg_44_dl_txt').style.display = 'none';
        document.getElementById('mg_44_l_txt').style.display = 'none';
        document.getElementById('mg_44_ml_txt').style.display = 'none';
        
        document.getElementById('st_44_dl_txt').style.display = 'none';
        document.getElementById('st_44_l_txt').style.display = 'none';
        document.getElementById('st_44_ml_txt').style.display = 'none';
        
        document.getElementById('BOP_44_db_rectangle').style.display = 'none';
        document.getElementById('BOP_44_b_rectangle').style.display = 'none';
        document.getElementById('BOP_44_mb_rectangle').style.display = 'none';
        
        document.getElementById('BOP_44_dl_rectangle').style.display = 'none';
        document.getElementById('BOP_44_l_rectangle').style.display = 'none';
        document.getElementById('BOP_44_ml_rectangle').style.display = 'none';
        
        document.getElementById('BOP_44_db_btn').style.display = 'none';
        document.getElementById('BOP_44_b_btn').style.display = 'none';
        document.getElementById('BOP_44_mb_btn').style.display = 'none';
        
        document.getElementById('BOP_44_dl_btn').style.display = 'none';
        document.getElementById('BOP_44_l_btn').style.display = 'none';
        document.getElementById('BOP_44_ml_btn').style.display = 'none';
        
        document.getElementById('PI_44_db_rectangle').style.display = 'none';
        document.getElementById('PI_44_b_rectangle').style.display = 'none';
        document.getElementById('PI_44_mb_rectangle').style.display = 'none';
        
        document.getElementById('PI_44_dl_rectangle').style.display = 'none';
        document.getElementById('PI_44_l_rectangle').style.display = 'none';
        document.getElementById('PI_44_ml_rectangle').style.display = 'none';
        
        document.getElementById('PI_44_db_btn').style.display = 'none';
        document.getElementById('PI_44_b_btn').style.display = 'none';
        document.getElementById('PI_44_mb_btn').style.display = 'none';
        
        document.getElementById('PI_44_dl_btn').style.display = 'none';
        document.getElementById('PI_44_l_btn').style.display = 'none';
        document.getElementById('PI_44_ml_btn').style.display = 'none';
        
        document.getElementById('polygon_44_b').style.display = 'none';
        document.getElementById('polyline_an_44_b').style.display = 'none';
        document.getElementById('polyline_mg_44_b').style.display = 'none';
        
        document.getElementById('polygon_44_l').style.display = 'none';
        document.getElementById('polyline_an_44_l').style.display = 'none';
        document.getElementById('polyline_mg_44_l').style.display = 'none';
        
        document.getElementById('polygon_inter_45_44_b').style.display = 'none';            
        document.getElementById('polyline_an_inter_45_44_b').style.display = 'none';            
        document.getElementById('polyline_mg_inter_45_44_b').style.display = 'none';            
        
        document.getElementById('polygon_inter_45_44_l').style.display = 'none';            
        document.getElementById('polyline_an_inter_45_44_l').style.display = 'none';            
        document.getElementById('polyline_mg_inter_45_44_l').style.display = 'none';            
        
        document.getElementById('polygon_inter_44_43_b').style.display = 'none';            
        document.getElementById('polyline_an_inter_44_43_b').style.display = 'none';            
        document.getElementById('polyline_mg_inter_44_43_b').style.display = 'none';            
        
        document.getElementById('polygon_inter_44_43_l').style.display = 'none';            
        document.getElementById('polyline_an_inter_44_43_l').style.display = 'none';            
        document.getElementById('polyline_mg_inter_44_43_l').style.display = 'none';            
        
        document.getElementById('note_44_txt').style.display = 'none';
    }
    else if (Implantat_44 !== 1) {
        Zahn_44 = 1;
        document.getElementById('tooth_line_44_b').style.display = 'none';
        document.getElementById('tooth_line_44_l').style.display = 'none';

        document.getElementById('mobility_44_txt').style.display = 'block';

        document.getElementById('implantat_44_btn').style.display = 'block';

        document.getElementById('mg_44_db_txt').style.display = 'block';
        document.getElementById('mg_44_b_txt').style.display = 'block';
        document.getElementById('mg_44_mb_txt').style.display = 'block';
        
        document.getElementById('st_44_db_txt').style.display = 'block';
        document.getElementById('st_44_b_txt').style.display = 'block';
        document.getElementById('st_44_mb_txt').style.display = 'block';
        
        document.getElementById('mg_44_dl_txt').style.display = 'block';
        document.getElementById('mg_44_l_txt').style.display = 'block';
        document.getElementById('mg_44_ml_txt').style.display = 'block';
        
        document.getElementById('st_44_dl_txt').style.display = 'block';
        document.getElementById('st_44_l_txt').style.display = 'block';
        document.getElementById('st_44_ml_txt').style.display = 'block';
        
        document.getElementById('note_44_txt').style.display = 'block';

        document.getElementById('polygon_44_b').style.display = 'block';
        document.getElementById('polyline_an_44_b').style.display = 'block';
        document.getElementById('polyline_mg_44_b').style.display = 'block';
        
        document.getElementById('polygon_44_l').style.display = 'block';
        document.getElementById('polyline_an_44_l').style.display = 'block';
        document.getElementById('polyline_mg_44_l').style.display = 'block';

        if (Zahn_45 == 1 && Zahn_44 == 1) {
            document.getElementById('polygon_inter_45_44_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_45_44_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_45_44_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_45_44_l').style.display = 'block';            
            document.getElementById('polyline_an_inter_45_44_l').style.display = 'block';            
            document.getElementById('polyline_mg_inter_45_44_l').style.display = 'block';            
        }
        
        if (Zahn_44 == 1 && Zahn_43 == 1) {
            document.getElementById('polygon_inter_44_43_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_44_43_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_44_43_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_44_43_l').style.display = 'block';            
            document.getElementById('polyline_an_inter_44_43_l').style.display = 'block';            
            document.getElementById('polyline_mg_inter_44_43_l').style.display = 'block';            
        }

        document.getElementById('BOP_44_db_btn').style.display = 'block';
        document.getElementById('BOP_44_b_btn').style.display = 'block';
        document.getElementById('BOP_44_mb_btn').style.display = 'block';

        document.getElementById('BOP_44_dl_btn').style.display = 'block';
        document.getElementById('BOP_44_l_btn').style.display = 'block';
        document.getElementById('BOP_44_ml_btn').style.display = 'block';
        
        if (BOP_44_db == 1) {
            document.getElementById('BOP_44_db_rectangle').style.display = 'block';
        }
        if (BOP_44_b == 1) {
            document.getElementById('BOP_44_b_rectangle').style.display = 'block';
        }
        if (BOP_44_mb == 1) {
            document.getElementById('BOP_44_mb_rectangle').style.display = 'block';
        }
        if (BOP_44_dl == 1) {
            document.getElementById('BOP_44_dl_rectangle').style.display = 'block';
        }
        if (BOP_44_l == 1) {
            document.getElementById('BOP_44_l_rectangle').style.display = 'block';
        }
        if (BOP_44_ml == 1) {
            document.getElementById('BOP_44_ml_rectangle').style.display = 'block';
        }
        
        document.getElementById('PI_44_db_btn').style.display = 'block';
        document.getElementById('PI_44_b_btn').style.display = 'block';
        document.getElementById('PI_44_mb_btn').style.display = 'block';

        document.getElementById('PI_44_dl_btn').style.display = 'block';
        document.getElementById('PI_44_l_btn').style.display = 'block';
        document.getElementById('PI_44_ml_btn').style.display = 'block';
        
        if (PI_44_db == 1) {
            document.getElementById('PI_44_db_rectangle').style.display = 'block';
        }
        if (PI_44_b == 1) {
            document.getElementById('PI_44_b_rectangle').style.display = 'block';
        }
        if (PI_44_mb == 1) {
            document.getElementById('PI_44_mb_rectangle').style.display = 'block';
        }
        if (PI_44_dl == 1) {
            document.getElementById('PI_44_dl_rectangle').style.display = 'block';
        }
        if (PI_44_l == 1) {
            document.getElementById('PI_44_l_rectangle').style.display = 'block';
        }
        if (PI_44_ml == 1) {
            document.getElementById('PI_44_ml_rectangle').style.display = 'block';
        }
    }		
    else if (Implantat_44 == 1) {
        Zahn_44 = 1;
        document.getElementById('tooth_line_44_b').style.display = 'none';
        document.getElementById('tooth_line_44_l').style.display = 'none';

        document.getElementById('mobility_44_txt').style.display = 'block';
        
        document.getElementById('note_44_txt').style.display = 'block';

        document.getElementById('implantat_44_btn').style.display = 'block';
        document.getElementById('implantat_44_tab').style.display = 'block';
        document.getElementById('implantat_44_b_image').style.display = 'block';
        document.getElementById('implantat_44_l_image').style.display = 'block';

        document.getElementById('mg_44_db_txt').style.display = 'block';
        document.getElementById('mg_44_b_txt').style.display = 'block';
        document.getElementById('mg_44_mb_txt').style.display = 'block';
        
        document.getElementById('st_44_db_txt').style.display = 'block';
        document.getElementById('st_44_b_txt').style.display = 'block';
        document.getElementById('st_44_mb_txt').style.display = 'block';
        
        document.getElementById('mg_44_dl_txt').style.display = 'block';
        document.getElementById('mg_44_l_txt').style.display = 'block';
        document.getElementById('mg_44_ml_txt').style.display = 'block';
        
        document.getElementById('st_44_dl_txt').style.display = 'block';
        document.getElementById('st_44_l_txt').style.display = 'block';
        document.getElementById('st_44_ml_txt').style.display = 'block';

        document.getElementById('polygon_44_b').style.display = 'block';
        document.getElementById('polyline_an_44_b').style.display = 'block';
        document.getElementById('polyline_mg_44_b').style.display = 'block';
        
        document.getElementById('polygon_44_l').style.display = 'block';
        document.getElementById('polyline_an_44_l').style.display = 'block';
        document.getElementById('polyline_mg_44_l').style.display = 'block';

        if (Zahn_45 == 1 && Zahn_44 == 1) {
            document.getElementById('polygon_inter_45_44_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_45_44_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_45_44_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_45_44_l').style.display = 'block';            
            document.getElementById('polyline_an_inter_45_44_l').style.display = 'block';            
            document.getElementById('polyline_mg_inter_45_44_l').style.display = 'block';            
        }
        
        if (Zahn_44 == 1 && Zahn_43 == 1) {
            document.getElementById('polygon_inter_44_43_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_44_43_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_44_43_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_44_43_l').style.display = 'block';            
            document.getElementById('polyline_an_inter_44_43_l').style.display = 'block';            
            document.getElementById('polyline_mg_inter_44_43_l').style.display = 'block';            
        }

        document.getElementById('BOP_44_db_btn').style.display = 'block';
        document.getElementById('BOP_44_b_btn').style.display = 'block';
        document.getElementById('BOP_44_mb_btn').style.display = 'block';

        document.getElementById('BOP_44_dl_btn').style.display = 'block';
        document.getElementById('BOP_44_l_btn').style.display = 'block';
        document.getElementById('BOP_44_ml_btn').style.display = 'block';
        
        document.getElementById('PI_44_db_btn').style.display = 'block';
        document.getElementById('PI_44_b_btn').style.display = 'block';
        document.getElementById('PI_44_mb_btn').style.display = 'block';

        document.getElementById('PI_44_dl_btn').style.display = 'block';
        document.getElementById('PI_44_l_btn').style.display = 'block';
        document.getElementById('PI_44_ml_btn').style.display = 'block';
        
        if (BOP_44_db == 1) {
            document.getElementById('BOP_44_db_rectangle').style.display = 'block';
        }
        if (BOP_44_b == 1) {
            document.getElementById('BOP_44_b_rectangle').style.display = 'block';
        }
        if (BOP_44_mb == 1) {
            document.getElementById('BOP_44_mb_rectangle').style.display = 'block';
        }
        if (BOP_44_dl == 1) {
            document.getElementById('BOP_44_dl_rectangle').style.display = 'block';
        }
        if (BOP_44_l == 1) {
            document.getElementById('BOP_44_l_rectangle').style.display = 'block';
        }
        if (BOP_44_ml == 1) {
            document.getElementById('BOP_44_ml_rectangle').style.display = 'block';
        }
        
        if (PI_44_db == 1) {
            document.getElementById('PI_44_db_rectangle').style.display = 'block';
        }
        if (PI_44_b == 1) {
            document.getElementById('PI_44_b_rectangle').style.display = 'block';
        }
        if (PI_44_mb == 1) {
            document.getElementById('PI_44_mb_rectangle').style.display = 'block';
        }
        if (PI_44_dl == 1) {
            document.getElementById('PI_44_dl_rectangle').style.display = 'block';
        }
        if (PI_44_l == 1) {
            document.getElementById('PI_44_l_rectangle').style.display = 'block';
        }
        if (PI_44_ml == 1) {
            document.getElementById('PI_44_ml_rectangle').style.display = 'block';
        }
    }
}

function toggle_implant_44() {
    if (Implantat_44 == 0) {
        Implantat_44 = 1;
        
        document.getElementById('implantat_44_b_image').style.display = 'block';
        document.getElementById('implantat_44_l_image').style.display = 'block';
        document.getElementById('implantat_44_tab').style.display = 'block';
    }
    else {
        Implantat_44 = 0;
        
        document.getElementById('implantat_44_b_image').style.display = 'none';
        document.getElementById('implantat_44_l_image').style.display = 'none';
        document.getElementById('implantat_44_tab').style.display = 'none';
    }
}

function toggle_BOP_44_db() {
    if (BOP_44_db == 0) {
        BOP_44_db = 1;
        document.getElementById('BOP_44_db_rectangle').style.display = 'block';
    }
    else {
        BOP_44_db = 0;
        document.getElementById('BOP_44_db_rectangle').style.display = 'none';
    }
}

function toggle_BOP_44_b() {
    if (BOP_44_b == 0) {
        BOP_44_b = 1;
        document.getElementById('BOP_44_b_rectangle').style.display = 'block';
    }
    else {
        BOP_44_b = 0;
        document.getElementById('BOP_44_b_rectangle').style.display = 'none';
    }
}

function toggle_BOP_44_mb() {
    if (BOP_44_mb == 0) {
        BOP_44_mb = 1;
        document.getElementById('BOP_44_mb_rectangle').style.display = 'block';
    }
    else {
        BOP_44_mb = 0;
        document.getElementById('BOP_44_mb_rectangle').style.display = 'none';
    }
}

function toggle_PI_44_db() {
    if (PI_44_db == 0) {
        PI_44_db = 1;
        document.getElementById('PI_44_db_rectangle').style.display = 'block';
    }
    else {
        PI_44_db = 0;
        document.getElementById('PI_44_db_rectangle').style.display = 'none';
    }
}

function toggle_PI_44_b() {
    if (PI_44_b == 0) {
        PI_44_b = 1;
        document.getElementById('PI_44_b_rectangle').style.display = 'block';
    }
    else {
        PI_44_b = 0;
        document.getElementById('PI_44_b_rectangle').style.display = 'none';
    }
}

function toggle_PI_44_mb() {
    if (PI_44_mb == 0) {
        PI_44_mb = 1;
        document.getElementById('PI_44_mb_rectangle').style.display = 'block';
    }
    else {
        PI_44_mb = 0;
        document.getElementById('PI_44_mb_rectangle').style.display = 'none';
    }
}

function toggle_BOP_44_dl() {
    if (BOP_44_dl == 0) {
        BOP_44_dl = 1;
        document.getElementById('BOP_44_dl_rectangle').style.display = 'block';
    }
    else {
        BOP_44_dl = 0;
        document.getElementById('BOP_44_dl_rectangle').style.display = 'none';
    }
}

function toggle_BOP_44_l() {
    if (BOP_44_l == 0) {
        BOP_44_l = 1;
        document.getElementById('BOP_44_l_rectangle').style.display = 'block';
    }
    else {
        BOP_44_l = 0;
        document.getElementById('BOP_44_l_rectangle').style.display = 'none';
    }
}

function toggle_BOP_44_ml() {
    if (BOP_44_ml == 0) {
        BOP_44_ml = 1;
        document.getElementById('BOP_44_ml_rectangle').style.display = 'block';
    }
    else {
        BOP_44_ml = 0;
        document.getElementById('BOP_44_ml_rectangle').style.display = 'none';
    }
}

function toggle_PI_44_dl() {
    if (PI_44_dl == 0) {
        PI_44_dl = 1;
        document.getElementById('PI_44_dl_rectangle').style.display = 'block';
    }
    else {
        PI_44_dl = 0;
        document.getElementById('PI_44_dl_rectangle').style.display = 'none';
    }
}

function toggle_PI_44_l() {
    if (PI_44_l == 0) {
        PI_44_l = 1;
        document.getElementById('PI_44_l_rectangle').style.display = 'block';
    }
    else {
        PI_44_l = 0;
        document.getElementById('PI_44_l_rectangle').style.display = 'none';
    }
}

function toggle_PI_44_ml() {
    if (PI_44_ml == 0) {
        PI_44_ml = 1;
        document.getElementById('PI_44_ml_rectangle').style.display = 'block';
    }
    else {
        PI_44_ml = 0;
        document.getElementById('PI_44_ml_rectangle').style.display = 'none';
    }
}

function change_probing_44() {
    if (Zahn_44 == 1) {
        
    // Variablen aus dem Formular
        st_44_db = document.forms[0]["st_44_db"].value;
        st_44_b = document.forms[0]["st_44_b"].value;
        st_44_mb = document.forms[0]["st_44_mb"].value;

        if (document.forms[0]["st_44_dl"].value > 3) {document.forms[0]["st_44_dl"].style.color = 'red';} else {document.forms[0]["st_44_dl"].style.color = 'black'};
        if (document.forms[0]["st_44_l"].value > 3) {document.forms[0]["st_44_l"].style.color = 'red';} else {document.forms[0]["st_44_l"].style.color = 'black'};
        if (document.forms[0]["st_44_ml"].value > 3) {document.forms[0]["st_44_ml"].style.color = 'red';} else {document.forms[0]["st_44_ml"].style.color = 'black'};
        
        mg_44_db = document.forms[0]["mg_44_db"].value;
        mg_44_b = document.forms[0]["mg_44_b"].value;
        mg_44_mb = document.forms[0]["mg_44_mb"].value;
        
        st_44_dl = document.forms[0]["st_44_dl"].value;
        st_44_l = document.forms[0]["st_44_l"].value;
        st_44_ml = document.forms[0]["st_44_ml"].value;

        if (document.forms[0]["st_44_db"].value > 3) {document.forms[0]["st_44_db"].style.color = 'red';} else {document.forms[0]["st_44_db"].style.color = 'black'};
        if (document.forms[0]["st_44_b"].value > 3) {document.forms[0]["st_44_b"].style.color = 'red';} else {document.forms[0]["st_44_b"].style.color = 'black'};
        if (document.forms[0]["st_44_mb"].value > 3) {document.forms[0]["st_44_mb"].style.color = 'red';} else {document.forms[0]["st_44_mb"].style.color = 'black'};
        
        mg_44_dl = document.forms[0]["mg_44_dl"].value;
        mg_44_l = document.forms[0]["mg_44_l"].value;
        mg_44_ml = document.forms[0]["mg_44_ml"].value;

    // Set der horizontalen Koordinaten von Zahn 44 (bukkal) in der Bitmap
        var x_db_44 = 533;							// distal 44
        var x_mb_44 = 553;							// mesial 44
        var x_b_44 = (x_db_44 + x_mb_44)/2;			// bukkal 44
        
    // Set der horizontalen Koordinaten von Zahn 44 (lingual) in der Bitmap
        var x_dl_44 = 531;							// distal 44
        var x_ml_44 = 553;							// mesial 44
        var x_l_44 = (x_dl_44 + x_ml_44)/2;			// lingual 44
        
    // Set der vertikalen Koordinaten von Zahn 44 (bukkal) aus dem Formular
        var y_mg_44_db = mg_UK_b - 6.05 * mg_44_db;	// Margo Gingivae distobukkal 44
        var y_mg_44_b = mg_UK_b - 6.05 * mg_44_b;	// Margo Gingivae bukkal 44
        var y_mg_44_mb = mg_UK_b - 6.05 * mg_44_mb;	// Margo Gingivae mesiobukkal 44
        var y_st_44_db = 6.05 * st_44_db;			// Sondierungstiefe distobukkal 44
        var y_st_44_b = 6.05 * st_44_b;				// Sondierungstiefe bukkal 44
        var y_st_44_mb = 6.05 * st_44_mb;			// Sondierungstiefe mesiobukkal 44
        
    // Set der vertikalen Koordinaten von Zahn 44 (lingual) aus dem Formular
        var y_mg_44_dl = mg_UK_l + 6.05 * mg_44_dl;	// Margo Gingivae distolingual 44
        var y_mg_44_l = mg_UK_l + 6.05 * mg_44_l;	// Margo Gingivae lingual 44
        var y_mg_44_ml = mg_UK_l + 6.05 * mg_44_ml;	// Margo Gingivae mesiolingual 44
        var y_st_44_dl = 6.05 * st_44_dl;			// Sondierungstiefe distolingual 44
        var y_st_44_l = 6.05 * st_44_l;				// Sondierungstiefe lingual 44
        var y_st_44_ml = 6.05 * st_44_ml;			// Sondierungstiefe mesiolingual 44
        
    // Berechnung des Attachmentniveaus 44 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_44_db = y_mg_44_db + y_st_44_db;	// Attachmentniveau distobukkal 44
        var y_an_44_b = y_mg_44_b + y_st_44_b;		// Attachmentniveau bukkal 44
        var y_an_44_mb = y_mg_44_mb + y_st_44_mb;	// Attachmentniveau mesiobukkal 44
        
    // Berechnung des Attachmentniveaus 44 (lingual) aus Margo Gingivae und Sondierungstiefe
        var y_an_44_dl = y_mg_44_dl - y_st_44_dl;	// Attachmentniveau distolingual 44
        var y_an_44_l = y_mg_44_l - y_st_44_l;		// Attachmentniveau lingual 44
        var y_an_44_ml = y_mg_44_ml - y_st_44_ml;	// Attachmentniveau mesiolingual 44
        
    // Parodontaltasche 44 bukkal zeichnen
        var string = 
            x_db_44 + ", " + y_an_44_db + "  " + 
            x_b_44 + ", " + y_an_44_b + "  " + 
            x_mb_44 + ", " + y_an_44_mb + "  " + 
            x_mb_44 + ", " + y_mg_44_mb + "  " + 
            x_b_44 + ", " + y_mg_44_b + "  " + 
            x_db_44 + ", " + y_mg_44_db;
        document.getElementById("polygon_44_b").setAttribute("points", string);
    // Attachmentniveau 44 bukkal zeichnen
        var string = 
            x_db_44 + ", " + y_an_44_db + "  " + 
            x_b_44 + ", " + y_an_44_b + "  " + 
            x_mb_44 + ", " + y_an_44_mb;
        document.getElementById("polyline_an_44_b").setAttribute("points", string);
    // Margo Gingivae 44 bukkal zeichnen
        var string =
            x_db_44 + ", " + y_mg_44_db + "  " + 
            x_b_44 + ", " + y_mg_44_b + "  " + 
            x_mb_44 + ", " + y_mg_44_mb;
        document.getElementById("polyline_mg_44_b").setAttribute("points", string);

    // Parodontaltasche 44 lingual zeichnen
        var string = 
            x_dl_44 + ", " + y_an_44_dl + "  " + 
            x_l_44 + ", " + y_an_44_l + "  " + 
            x_ml_44 + ", " + y_an_44_ml + "  " + 
            x_ml_44 + ", " + y_mg_44_ml + "  " + 
            x_l_44 + ", " + y_mg_44_l + "  " + 
            x_dl_44 + ", " + y_mg_44_dl;
        document.getElementById("polygon_44_l").setAttribute("points", string);
    // Attachmentniveau 44 lingual zeichnen
        var string = 
            x_dl_44 + ", " + y_an_44_dl + "  " + 
            x_l_44 + ", " + y_an_44_l + "  " + 
            x_ml_44 + ", " + y_an_44_ml;
        document.getElementById("polyline_an_44_l").setAttribute("points", string);
    // Margo Gingivae 44 lingual zeichnen
        var string =
            x_dl_44 + ", " + y_mg_44_dl + "  " + 
            x_l_44 + ", " + y_mg_44_l + "  " + 
            x_ml_44 + ", " + y_mg_44_ml;
        document.getElementById("polyline_mg_44_l").setAttribute("points", string);
    }
    if (Zahn_44 == 1 && Zahn_43 == 1) {

        st_43_db = document.forms[0]["st_43_db"].value;
        mg_43_db = document.forms[0]["mg_43_db"].value;
        
        st_43_dl = document.forms[0]["st_43_dl"].value;
        mg_43_dl = document.forms[0]["mg_43_dl"].value;
        
    // Set der horizontalen Koordinaten von Zahn 43 (bukkal) in der Bitmap
        var x_db_43 = 570;							// distal 43
        
    // Set der horizontalen Koordinaten von Zahn 43 (lingual) in der Bitmap
        var x_dl_43 = 570;							// distal 43
        
    // Set der vertikalen Koordinaten von Zahn 43 (bukkal) aus dem Formular
        var y_mg_43_db = mg_UK_b - 6.05 * mg_43_db;	// Margo Gingivae distobukkal 43
        var y_st_43_db = 6.05 * st_43_db;			// Sondierungstiefe distobukkal 43
        
    // Set der vertikalen Koordinaten von Zahn 43 (lingual) aus dem Formular
        var y_mg_43_dl = mg_UK_l + 6.05 * mg_43_dl;	// Margo Gingivae distolingual 43
        var y_st_43_dl = 6.05 * st_43_dl;			// Sondierungstiefe distolingual 43
        
    // Berechnung des Attachmentniveaus 43 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_43_db = y_mg_43_db + y_st_43_db;	// Attachmentniveau distobukkal 43
        
    // Berechnung des Attachmentniveaus 43 (lingual) aus Margo Gingivae und Sondierungstiefe
        var y_an_43_dl = y_mg_43_dl - y_st_43_dl;	// Attachmentniveau distolingual 43

    // Parodontaltasche inter_44_43 bukkal zeichnen
        var string = 
            x_mb_44 + ", " + y_an_44_mb + "  " + 
            x_db_43 + ", " + y_an_43_db + "  " + 
            x_db_43 + ", " + y_mg_43_db + "  " + 
            x_mb_44 + ", " + y_mg_44_mb;
        document.getElementById("polygon_inter_44_43_b").setAttribute("points", string);
    // Attachmentniveau inter_44_43 bukkal zeichnen
        var string = 
            x_mb_44 + ", " + y_an_44_mb + "  " + 
            x_db_43 + ", " + y_an_43_db;
        document.getElementById("polyline_an_inter_44_43_b").setAttribute("points", string);
    // Margo Gingivae inter_44_43 bukkal zeichnen
        var string =
            x_mb_44 + ", " + y_mg_44_mb + "  " + 
            x_db_43 + ", " + y_mg_43_db;
        document.getElementById("polyline_mg_inter_44_43_b").setAttribute("points", string);

    // Parodontaltasche inter_44_43 lingual zeichnen
        var string = 
            x_ml_44 + ", " + y_an_44_ml + "  " + 
            x_dl_43 + ", " + y_an_43_dl + "  " + 
            x_dl_43 + ", " + y_mg_43_dl + "  " + 
            x_ml_44 + ", " + y_mg_44_ml;
        document.getElementById("polygon_inter_44_43_l").setAttribute("points", string);
    // Attachmentniveau inter_44_43 lingual zeichnen
        var string = 
            x_ml_44 + ", " + y_an_44_ml + "  " + 
            x_dl_43 + ", " + y_an_43_dl;
        document.getElementById("polyline_an_inter_44_43_l").setAttribute("points", string);
    // Margo Gingivae inter_44_43 lingual zeichnen
        var string =
            x_ml_44 + ", " + y_mg_44_ml + "  " + 
            x_dl_43 + ", " + y_mg_43_dl;
        document.getElementById("polyline_mg_inter_44_43_l").setAttribute("points", string);
    }
    if (Zahn_45 == 1 && Zahn_44 == 1) {

        st_45_mb = document.forms[0]["st_45_mb"].value;
        mg_45_mb = document.forms[0]["mg_45_mb"].value;
        
        st_45_ml = document.forms[0]["st_45_ml"].value;
        mg_45_ml = document.forms[0]["mg_45_ml"].value;
        
    // Set der horizontalen Koordinaten von Zahn 45 (bukkal) in der Bitmap
        var x_mb_45 = 513;							// mesial 45
        
    // Set der horizontalen Koordinaten von Zahn 45 (lingual) in der Bitmap
        var x_ml_45 = 513;							// mesial 45
        
    // Set der vertikalen Koordinaten von Zahn 45 (bukkal) aus dem Formular
        var y_mg_45_mb = mg_UK_b - 6.05 * mg_45_mb;	// Margo Gingivae mesiobukkal 45
        var y_st_45_mb = 6.05 * st_45_mb;			// Sondierungstiefe mesiobukkal 45
        
    // Set der vertikalen Koordinaten von Zahn 45 (lingual) aus dem Formular
        var y_mg_45_ml = mg_UK_l + 6.05 * mg_45_ml;	// Margo Gingivae mesiolingual 45
        var y_st_45_ml = 6.05 * st_45_ml;			// Sondierungstiefe mesiolingual 45
        
    // Berechnung des Attachmentniveaus 45 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_45_mb = y_mg_45_mb + y_st_45_mb;	// Attachmentniveau mesiobukkal 45
        
    // Berechnung des Attachmentniveaus 45 (lingual) aus Margo Gingivae und Sondierungstiefe
        var y_an_45_ml = y_mg_45_ml - y_st_45_ml;	// Attachmentniveau mesiolingual 45

    // Parodontaltasche inter_45_44 bukkal zeichnen
        var string = 
            x_mb_45 + ", " + y_an_45_mb + "  " + 
            x_db_44 + ", " + y_an_44_db + "  " + 
            x_db_44 + ", " + y_mg_44_db + "  " + 
            x_mb_45 + ", " + y_mg_45_mb;
        document.getElementById("polygon_inter_45_44_b").setAttribute("points", string);
    // Attachmentniveau inter_45_44 bukkal zeichnen
        var string = 
            x_mb_45 + ", " + y_an_45_mb + "  " + 
            x_db_44 + ", " + y_an_44_db;
        document.getElementById("polyline_an_inter_45_44_b").setAttribute("points", string);
    // Margo Gingivae inter_45_44 bukkal zeichnen
        var string =
            x_mb_45 + ", " + y_mg_45_mb + "  " + 
            x_db_44 + ", " + y_mg_44_db;
        document.getElementById("polyline_mg_inter_45_44_b").setAttribute("points", string);

    // Parodontaltasche inter_45_44 lingual zeichnen
        var string = 
            x_ml_45 + ", " + y_an_45_ml + "  " + 
            x_dl_44 + ", " + y_an_44_dl + "  " + 
            x_dl_44 + ", " + y_mg_44_dl + "  " + 
            x_ml_45 + ", " + y_mg_45_ml;
        document.getElementById("polygon_inter_45_44_l").setAttribute("points", string);
    // Attachmentniveau inter_45_44 lingual zeichnen
        var string = 
            x_ml_45 + ", " + y_an_45_ml + "  " + 
            x_dl_44 + ", " + y_an_44_dl;
        document.getElementById("polyline_an_inter_45_44_l").setAttribute("points", string);
    // Margo Gingivae inter_45_44 lingual zeichnen
        var string =
            x_ml_45 + ", " + y_mg_45_ml + "  " + 
            x_dl_44 + ", " + y_mg_44_dl;
        document.getElementById("polyline_mg_inter_45_44_l").setAttribute("points", string);
    }
}