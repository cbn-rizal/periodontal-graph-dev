	// Definition der Variablen fÃ¼r das Formular
    var Zahn_35 = 1;
    var Implantat_35 = 0;
    var BOP_35_db = 0;
    var BOP_35_b = 0;
    var BOP_35_mb = 0;
    var PI_35_db = 0;
    var PI_35_b = 0;
    var PI_35_mb = 0;
    var BOP_35_dl = 0;
    var BOP_35_l = 0;
    var BOP_35_ml = 0;
    var PI_35_dl = 0;
    var PI_35_l = 0;
    var PI_35_ml = 0;
    var mg_35_db = 0;
    var mg_35_b = 0;
    var mg_35_mb = 0;
    var st_35_db = 0;
    var st_35_b = 0;
    var st_35_mb = 0;
    var mg_35_dl = 0;
    var mg_35_l = 0;
    var mg_35_ml = 0;
    var st_35_dl = 0;
    var st_35_l = 0;
    var st_35_ml = 0;

function clear_data_35() {
    if (Zahn_35 == 1) {
        mg_35_db = 0;
        mg_35_b = 0;
        mg_35_mb = 0;
        st_35_db = 0;
        st_35_b = 0;
        st_35_mb = 0;

            document.getElementById('mg_35_db_txt').value = 0;
            document.getElementById('mg_35_b_txt').value = 0;
            document.getElementById('mg_35_mb_txt').value = 0;
            
            document.getElementById('st_35_db_txt').value = 0;
            document.getElementById('st_35_b_txt').value = 0;
            document.getElementById('st_35_mb_txt').value = 0;
        
            document.forms[0]["st_35_db"].style.color = 'black'
            document.forms[0]["st_35_b"].style.color = 'black'
            document.forms[0]["st_35_mb"].style.color = 'black'
        
        mg_35_dl = 0;
        mg_35_l = 0;
        mg_35_ml = 0;
        st_35_dl = 0;
        st_35_l = 0;
        st_35_ml = 0;

            document.getElementById('mg_35_dl_txt').value = 0;
            document.getElementById('mg_35_l_txt').value = 0;
            document.getElementById('mg_35_ml_txt').value = 0;
            
            document.getElementById('st_35_dl_txt').value = 0;
            document.getElementById('st_35_l_txt').value = 0;
            document.getElementById('st_35_ml_txt').value = 0;

            document.forms[0]["st_35_dl"].style.color = 'black'
            document.forms[0]["st_35_l"].style.color = 'black'
            document.forms[0]["st_35_ml"].style.color = 'black'
        
        change_probing_35();
        
        mobility_35 = 0;

            document.getElementById('mobility_35_txt').value = "0";

        note_35 = "";

            document.getElementById('note_35_txt').value = "";

        BOP_35_db = 0;
        BOP_35_b = 0;
        BOP_35_mb = 0;
                
        BOP_35_dl = 0;
        BOP_35_l = 0;
        BOP_35_ml = 0;
                
            document.getElementById('BOP_35_db_rectangle').style.display = 'none';
            document.getElementById('BOP_35_b_rectangle').style.display = 'none';
            document.getElementById('BOP_35_mb_rectangle').style.display = 'none';
                
            document.getElementById('BOP_35_dl_rectangle').style.display = 'none';
            document.getElementById('BOP_35_l_rectangle').style.display = 'none';
            document.getElementById('BOP_35_ml_rectangle').style.display = 'none';
            
        PI_35_db = 0;
        PI_35_b = 0;
        PI_35_mb = 0;
                
        PI_35_dl = 0;
        PI_35_l = 0;
        PI_35_ml = 0;

            document.getElementById('PI_35_db_rectangle').style.display = 'none';
            document.getElementById('PI_35_b_rectangle').style.display = 'none';
            document.getElementById('PI_35_mb_rectangle').style.display = 'none';
                
            document.getElementById('PI_35_dl_rectangle').style.display = 'none';
            document.getElementById('PI_35_l_rectangle').style.display = 'none';
            document.getElementById('PI_35_ml_rectangle').style.display = 'none';
    }
}

function toggle_tooth_35() {
    if (Zahn_35 === 1) {
        Zahn_35 = 0;
        document.getElementById('tooth_line_35_b').style.display = 'block';
        document.getElementById('tooth_line_35_l').style.display = 'block';
        
        document.getElementById('mobility_35_txt').style.display = 'none';
        
        document.getElementById('implantat_35_btn').style.display = 'none';
        document.getElementById('implantat_35_tab').style.display = 'none';
        document.getElementById('implantat_35_b_image').style.display = 'none';
        document.getElementById('implantat_35_l_image').style.display = 'none';
        
        document.getElementById('mg_35_db_txt').style.display = 'none';
        document.getElementById('mg_35_b_txt').style.display = 'none';
        document.getElementById('mg_35_mb_txt').style.display = 'none';
        
        document.getElementById('st_35_db_txt').style.display = 'none';
        document.getElementById('st_35_b_txt').style.display = 'none';
        document.getElementById('st_35_mb_txt').style.display = 'none';
        
        document.getElementById('mg_35_dl_txt').style.display = 'none';
        document.getElementById('mg_35_l_txt').style.display = 'none';
        document.getElementById('mg_35_ml_txt').style.display = 'none';
        
        document.getElementById('st_35_dl_txt').style.display = 'none';
        document.getElementById('st_35_l_txt').style.display = 'none';
        document.getElementById('st_35_ml_txt').style.display = 'none';
                    
        document.getElementById('BOP_35_db_rectangle').style.display = 'none';
        document.getElementById('BOP_35_b_rectangle').style.display = 'none';
        document.getElementById('BOP_35_mb_rectangle').style.display = 'none';
        
        document.getElementById('BOP_35_dl_rectangle').style.display = 'none';
        document.getElementById('BOP_35_l_rectangle').style.display = 'none';
        document.getElementById('BOP_35_ml_rectangle').style.display = 'none';
        
        document.getElementById('BOP_35_db_btn').style.display = 'none';
        document.getElementById('BOP_35_b_btn').style.display = 'none';
        document.getElementById('BOP_35_mb_btn').style.display = 'none';
        
        document.getElementById('BOP_35_dl_btn').style.display = 'none';
        document.getElementById('BOP_35_l_btn').style.display = 'none';
        document.getElementById('BOP_35_ml_btn').style.display = 'none';
        
        document.getElementById('PI_35_db_rectangle').style.display = 'none';
        document.getElementById('PI_35_b_rectangle').style.display = 'none';
        document.getElementById('PI_35_mb_rectangle').style.display = 'none';
        
        document.getElementById('PI_35_dl_rectangle').style.display = 'none';
        document.getElementById('PI_35_l_rectangle').style.display = 'none';
        document.getElementById('PI_35_ml_rectangle').style.display = 'none';
        
        document.getElementById('PI_35_db_btn').style.display = 'none';
        document.getElementById('PI_35_b_btn').style.display = 'none';
        document.getElementById('PI_35_mb_btn').style.display = 'none';
        
        document.getElementById('PI_35_dl_btn').style.display = 'none';
        document.getElementById('PI_35_l_btn').style.display = 'none';
        document.getElementById('PI_35_ml_btn').style.display = 'none';
        
        
        document.getElementById('polygon_35_b').style.display = 'none';
        document.getElementById('polyline_an_35_b').style.display = 'none';
        document.getElementById('polyline_mg_35_b').style.display = 'none';
        
        document.getElementById('polygon_35_l').style.display = 'none';
        document.getElementById('polyline_an_35_l').style.display = 'none';
        document.getElementById('polyline_mg_35_l').style.display = 'none';
        
        document.getElementById('polygon_inter_36_35_b').style.display = 'none';            
        document.getElementById('polyline_an_inter_36_35_b').style.display = 'none';            
        document.getElementById('polyline_mg_inter_36_35_b').style.display = 'none';            
        
        document.getElementById('polygon_inter_36_35_l').style.display = 'none';            
        document.getElementById('polyline_an_inter_36_35_l').style.display = 'none';            
        document.getElementById('polyline_mg_inter_36_35_l').style.display = 'none';            
        
        document.getElementById('polygon_inter_35_34_b').style.display = 'none';            
        document.getElementById('polyline_an_inter_35_34_b').style.display = 'none';            
        document.getElementById('polyline_mg_inter_35_34_b').style.display = 'none';            
        
        document.getElementById('polygon_inter_35_34_l').style.display = 'none';            
        document.getElementById('polyline_an_inter_35_34_l').style.display = 'none';            
        document.getElementById('polyline_mg_inter_35_34_l').style.display = 'none';            
        
        document.getElementById('note_35_txt').style.display = 'none';
    }
    else if (Implantat_35 !== 1) {
        Zahn_35 = 1;
        document.getElementById('tooth_line_35_b').style.display = 'none';
        document.getElementById('tooth_line_35_l').style.display = 'none';

        document.getElementById('mobility_35_txt').style.display = 'block';

        document.getElementById('implantat_35_btn').style.display = 'block';

        document.getElementById('mg_35_db_txt').style.display = 'block';
        document.getElementById('mg_35_b_txt').style.display = 'block';
        document.getElementById('mg_35_mb_txt').style.display = 'block';
        
        document.getElementById('st_35_db_txt').style.display = 'block';
        document.getElementById('st_35_b_txt').style.display = 'block';
        document.getElementById('st_35_mb_txt').style.display = 'block';
        
        document.getElementById('mg_35_dl_txt').style.display = 'block';
        document.getElementById('mg_35_l_txt').style.display = 'block';
        document.getElementById('mg_35_ml_txt').style.display = 'block';
        
        document.getElementById('st_35_dl_txt').style.display = 'block';
        document.getElementById('st_35_l_txt').style.display = 'block';
        document.getElementById('st_35_ml_txt').style.display = 'block';
        
        document.getElementById('note_35_txt').style.display = 'block';

        document.getElementById('polygon_35_b').style.display = 'block';
        document.getElementById('polyline_an_35_b').style.display = 'block';
        document.getElementById('polyline_mg_35_b').style.display = 'block';
        
        document.getElementById('polygon_35_l').style.display = 'block';
        document.getElementById('polyline_an_35_l').style.display = 'block';
        document.getElementById('polyline_mg_35_l').style.display = 'block';

        if (Tooth_36 == 1 && Zahn_35 == 1) {
            document.getElementById('polygon_inter_36_35_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_36_35_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_36_35_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_36_35_l').style.display = 'block';            
            document.getElementById('polyline_an_inter_36_35_l').style.display = 'block';            
            document.getElementById('polyline_mg_inter_36_35_l').style.display = 'block';            
        }
        
        if (Zahn_35 == 1 && Zahn_34 == 1) {
            document.getElementById('polygon_inter_35_34_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_35_34_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_35_34_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_35_34_l').style.display = 'block';            
            document.getElementById('polyline_an_inter_35_34_l').style.display = 'block';            
            document.getElementById('polyline_mg_inter_35_34_l').style.display = 'block';            
        }

        document.getElementById('BOP_35_db_btn').style.display = 'block';
        document.getElementById('BOP_35_b_btn').style.display = 'block';
        document.getElementById('BOP_35_mb_btn').style.display = 'block';

        document.getElementById('BOP_35_dl_btn').style.display = 'block';
        document.getElementById('BOP_35_l_btn').style.display = 'block';
        document.getElementById('BOP_35_ml_btn').style.display = 'block';
        
        if (BOP_35_db == 1) {
            document.getElementById('BOP_35_db_rectangle').style.display = 'block';
        }
        if (BOP_35_b == 1) {
            document.getElementById('BOP_35_b_rectangle').style.display = 'block';
        }
        if (BOP_35_mb == 1) {
            document.getElementById('BOP_35_mb_rectangle').style.display = 'block';
        }
        if (BOP_35_dl == 1) {
            document.getElementById('BOP_35_dl_rectangle').style.display = 'block';
        }
        if (BOP_35_l == 1) {
            document.getElementById('BOP_35_l_rectangle').style.display = 'block';
        }
        if (BOP_35_ml == 1) {
            document.getElementById('BOP_35_ml_rectangle').style.display = 'block';
        }
        
        document.getElementById('PI_35_db_btn').style.display = 'block';
        document.getElementById('PI_35_b_btn').style.display = 'block';
        document.getElementById('PI_35_mb_btn').style.display = 'block';

        document.getElementById('PI_35_dl_btn').style.display = 'block';
        document.getElementById('PI_35_l_btn').style.display = 'block';
        document.getElementById('PI_35_ml_btn').style.display = 'block';
        
        if (PI_35_db == 1) {
            document.getElementById('PI_35_db_rectangle').style.display = 'block';
        }
        if (PI_35_b == 1) {
            document.getElementById('PI_35_b_rectangle').style.display = 'block';
        }
        if (PI_35_mb == 1) {
            document.getElementById('PI_35_mb_rectangle').style.display = 'block';
        }
        if (PI_35_dl == 1) {
            document.getElementById('PI_35_dl_rectangle').style.display = 'block';
        }
        if (PI_35_l == 1) {
            document.getElementById('PI_35_l_rectangle').style.display = 'block';
        }
        if (PI_35_ml == 1) {
            document.getElementById('PI_35_ml_rectangle').style.display = 'block';
        }
    }		
    else if (Implantat_35 == 1) {
        Zahn_35 = 1;
        document.getElementById('tooth_line_35_b').style.display = 'none';
        document.getElementById('tooth_line_35_l').style.display = 'none';

        document.getElementById('mobility_35_txt').style.display = 'block';
        
        document.getElementById('note_35_txt').style.display = 'block';

        document.getElementById('implantat_35_btn').style.display = 'block';
        document.getElementById('implantat_35_tab').style.display = 'block';
        document.getElementById('implantat_35_b_image').style.display = 'block';
        document.getElementById('implantat_35_l_image').style.display = 'block';

        document.getElementById('mg_35_db_txt').style.display = 'block';
        document.getElementById('mg_35_b_txt').style.display = 'block';
        document.getElementById('mg_35_mb_txt').style.display = 'block';
        
        document.getElementById('st_35_db_txt').style.display = 'block';
        document.getElementById('st_35_b_txt').style.display = 'block';
        document.getElementById('st_35_mb_txt').style.display = 'block';
        
        document.getElementById('mg_35_dl_txt').style.display = 'block';
        document.getElementById('mg_35_l_txt').style.display = 'block';
        document.getElementById('mg_35_ml_txt').style.display = 'block';
        
        document.getElementById('st_35_dl_txt').style.display = 'block';
        document.getElementById('st_35_l_txt').style.display = 'block';
        document.getElementById('st_35_ml_txt').style.display = 'block';

        document.getElementById('polygon_35_b').style.display = 'block';
        document.getElementById('polyline_an_35_b').style.display = 'block';
        document.getElementById('polyline_mg_35_b').style.display = 'block';
        
        document.getElementById('polygon_35_l').style.display = 'block';
        document.getElementById('polyline_an_35_l').style.display = 'block';
        document.getElementById('polyline_mg_35_l').style.display = 'block';

        if (Tooth_36 == 1 && Zahn_35 == 1) {
            document.getElementById('polygon_inter_36_35_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_36_35_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_36_35_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_36_35_l').style.display = 'block';            
            document.getElementById('polyline_an_inter_36_35_l').style.display = 'block';            
            document.getElementById('polyline_mg_inter_36_35_l').style.display = 'block';            
        }
        
        if (Zahn_35 == 1 && Zahn_34 == 1) {
            document.getElementById('polygon_inter_35_34_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_35_34_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_35_34_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_35_34_l').style.display = 'block';            
            document.getElementById('polyline_an_inter_35_34_l').style.display = 'block';            
            document.getElementById('polyline_mg_inter_35_34_l').style.display = 'block';            
        }

        document.getElementById('BOP_35_db_btn').style.display = 'block';
        document.getElementById('BOP_35_b_btn').style.display = 'block';
        document.getElementById('BOP_35_mb_btn').style.display = 'block';

        document.getElementById('BOP_35_dl_btn').style.display = 'block';
        document.getElementById('BOP_35_l_btn').style.display = 'block';
        document.getElementById('BOP_35_ml_btn').style.display = 'block';
        
        document.getElementById('PI_35_db_btn').style.display = 'block';
        document.getElementById('PI_35_b_btn').style.display = 'block';
        document.getElementById('PI_35_mb_btn').style.display = 'block';

        document.getElementById('PI_35_dl_btn').style.display = 'block';
        document.getElementById('PI_35_l_btn').style.display = 'block';
        document.getElementById('PI_35_ml_btn').style.display = 'block';
        
        if (BOP_35_db == 1) {
            document.getElementById('BOP_35_db_rectangle').style.display = 'block';
        }
        if (BOP_35_b == 1) {
            document.getElementById('BOP_35_b_rectangle').style.display = 'block';
        }
        if (BOP_35_mb == 1) {
            document.getElementById('BOP_35_mb_rectangle').style.display = 'block';
        }
        if (BOP_35_dl == 1) {
            document.getElementById('BOP_35_dl_rectangle').style.display = 'block';
        }
        if (BOP_35_l == 1) {
            document.getElementById('BOP_35_l_rectangle').style.display = 'block';
        }
        if (BOP_35_ml == 1) {
            document.getElementById('BOP_35_ml_rectangle').style.display = 'block';
        }
        
        if (PI_35_db == 1) {
            document.getElementById('PI_35_db_rectangle').style.display = 'block';
        }
        if (PI_35_b == 1) {
            document.getElementById('PI_35_b_rectangle').style.display = 'block';
        }
        if (PI_35_mb == 1) {
            document.getElementById('PI_35_mb_rectangle').style.display = 'block';
        }
        if (PI_35_dl == 1) {
            document.getElementById('PI_35_dl_rectangle').style.display = 'block';
        }
        if (PI_35_l == 1) {
            document.getElementById('PI_35_l_rectangle').style.display = 'block';
        }
        if (PI_35_ml == 1) {
            document.getElementById('PI_35_ml_rectangle').style.display = 'block';
        }
    }
}

function toggle_implant_35() {
    if (Implantat_35 == 0) {
        Implantat_35 = 1;
        
        document.getElementById('implantat_35_b_image').style.display = 'block';
        document.getElementById('implantat_35_l_image').style.display = 'block';
        document.getElementById('implantat_35_tab').style.display = 'block';
    }
    else {
        Implantat_35 = 0;
        
        document.getElementById('implantat_35_b_image').style.display = 'none';
        document.getElementById('implantat_35_l_image').style.display = 'none';
        document.getElementById('implantat_35_tab').style.display = 'none';
    }
}

function toggle_BOP_35_db() {
    if (BOP_35_db == 0) {
        BOP_35_db = 1;
        document.getElementById('BOP_35_db_rectangle').style.display = 'block';
    }
    else {
        BOP_35_db = 0;
        document.getElementById('BOP_35_db_rectangle').style.display = 'none';
    }
}

function toggle_BOP_35_b() {
    if (BOP_35_b == 0) {
        BOP_35_b = 1;
        document.getElementById('BOP_35_b_rectangle').style.display = 'block';
    }
    else {
        BOP_35_b = 0;
        document.getElementById('BOP_35_b_rectangle').style.display = 'none';
    }
}

function toggle_BOP_35_mb() {
    if (BOP_35_mb == 0) {
        BOP_35_mb = 1;
        document.getElementById('BOP_35_mb_rectangle').style.display = 'block';
    }
    else {
        BOP_35_mb = 0;
        document.getElementById('BOP_35_mb_rectangle').style.display = 'none';
    }
}

function toggle_PI_35_db() {
    if (PI_35_db == 0) {
        PI_35_db = 1;
        document.getElementById('PI_35_db_rectangle').style.display = 'block';
    }
    else {
        PI_35_db = 0;
        document.getElementById('PI_35_db_rectangle').style.display = 'none';
    }
}

function toggle_PI_35_b() {
    if (PI_35_b == 0) {
        PI_35_b = 1;
        document.getElementById('PI_35_b_rectangle').style.display = 'block';
    }
    else {
        PI_35_b = 0;
        document.getElementById('PI_35_b_rectangle').style.display = 'none';
    }
}

function toggle_PI_35_mb() {
    if (PI_35_mb == 0) {
        PI_35_mb = 1;
        document.getElementById('PI_35_mb_rectangle').style.display = 'block';
    }
    else {
        PI_35_mb = 0;
        document.getElementById('PI_35_mb_rectangle').style.display = 'none';
    }
}

function toggle_BOP_35_dl() {
    if (BOP_35_dl == 0) {
        BOP_35_dl = 1;
        document.getElementById('BOP_35_dl_rectangle').style.display = 'block';
    }
    else {
        BOP_35_dl = 0;
        document.getElementById('BOP_35_dl_rectangle').style.display = 'none';
    }
}

function toggle_BOP_35_l() {
    if (BOP_35_l == 0) {
        BOP_35_l = 1;
        document.getElementById('BOP_35_l_rectangle').style.display = 'block';
    }
    else {
        BOP_35_l = 0;
        document.getElementById('BOP_35_l_rectangle').style.display = 'none';
    }
}

function toggle_BOP_35_ml() {
    if (BOP_35_ml == 0) {
        BOP_35_ml = 1;
        document.getElementById('BOP_35_ml_rectangle').style.display = 'block';
    }
    else {
        BOP_35_ml = 0;
        document.getElementById('BOP_35_ml_rectangle').style.display = 'none';
    }
}

function toggle_PI_35_dl() {
    if (PI_35_dl == 0) {
        PI_35_dl = 1;
        document.getElementById('PI_35_dl_rectangle').style.display = 'block';
    }
    else {
        PI_35_dl = 0;
        document.getElementById('PI_35_dl_rectangle').style.display = 'none';
    }
}

function toggle_PI_35_l() {
    if (PI_35_l == 0) {
        PI_35_l = 1;
        document.getElementById('PI_35_l_rectangle').style.display = 'block';
    }
    else {
        PI_35_l = 0;
        document.getElementById('PI_35_l_rectangle').style.display = 'none';
    }
}

function toggle_PI_35_ml() {
    if (PI_35_ml == 0) {
        PI_35_ml = 1;
        document.getElementById('PI_35_ml_rectangle').style.display = 'block';
    }
    else {
        PI_35_ml = 0;
        document.getElementById('PI_35_ml_rectangle').style.display = 'none';
    }
}

function change_probing_35() {
    if (Zahn_35 == 1) {
        
    // Variablen aus dem Formular
        st_35_db = document.forms[0]["st_35_db"].value;
        st_35_b = document.forms[0]["st_35_b"].value;
        st_35_mb = document.forms[0]["st_35_mb"].value;

        if (document.forms[0]["st_35_dl"].value > 3) {document.forms[0]["st_35_dl"].style.color = 'red';} else {document.forms[0]["st_35_dl"].style.color = 'black'};
        if (document.forms[0]["st_35_l"].value > 3) {document.forms[0]["st_35_l"].style.color = 'red';} else {document.forms[0]["st_35_l"].style.color = 'black'};
        if (document.forms[0]["st_35_ml"].value > 3) {document.forms[0]["st_35_ml"].style.color = 'red';} else {document.forms[0]["st_35_ml"].style.color = 'black'};
        
        mg_35_db = document.forms[0]["mg_35_db"].value;
        mg_35_b = document.forms[0]["mg_35_b"].value;
        mg_35_mb = document.forms[0]["mg_35_mb"].value;
        
        st_35_dl = document.forms[0]["st_35_dl"].value;
        st_35_l = document.forms[0]["st_35_l"].value;
        st_35_ml = document.forms[0]["st_35_ml"].value;

        if (document.forms[0]["st_35_db"].value > 3) {document.forms[0]["st_35_db"].style.color = 'red';} else {document.forms[0]["st_35_db"].style.color = 'black'};
        if (document.forms[0]["st_35_b"].value > 3) {document.forms[0]["st_35_b"].style.color = 'red';} else {document.forms[0]["st_35_b"].style.color = 'black'};
        if (document.forms[0]["st_35_mb"].value > 3) {document.forms[0]["st_35_mb"].style.color = 'red';} else {document.forms[0]["st_35_mb"].style.color = 'black'};
        
        mg_35_dl = document.forms[0]["mg_35_dl"].value;
        mg_35_l = document.forms[0]["mg_35_l"].value;
        mg_35_ml = document.forms[0]["mg_35_ml"].value;

    // Set der horizontalen Koordinaten von Zahn 35 (bukkal) in der Bitmap
        var x_db_35 = 864;							// distal 35
        var x_mb_35 = 845;							// mesial 35
        var x_b_35 = (x_db_35 + x_mb_35)/2;			// bukkal 35
        
    // Set der horizontalen Koordinaten von Zahn 35 (lingual) in der Bitmap
        var x_dl_35 = 868;							// distal 35
        var x_ml_35 = 845;							// mesial 35
        var x_l_35 = (x_dl_35 + x_ml_35)/2;			// lingual 35
        
    // Set der vertikalen Koordinaten von Zahn 35 (bukkal) aus dem Formular
        var y_mg_35_db = mg_UK_b - 6.05 * mg_35_db;	// Margo Gingivae distobukkal 35
        var y_mg_35_b = mg_UK_b - 6.05 * mg_35_b;	// Margo Gingivae bukkal 35
        var y_mg_35_mb = mg_UK_b - 6.05 * mg_35_mb;	// Margo Gingivae mesiobukkal 35
        var y_st_35_db = 6.05 * st_35_db;			// Sondierungstiefe distobukkal 35
        var y_st_35_b = 6.05 * st_35_b;				// Sondierungstiefe bukkal 35
        var y_st_35_mb = 6.05 * st_35_mb;			// Sondierungstiefe mesiobukkal 35
        
    // Set der vertikalen Koordinaten von Zahn 35 (lingual) aus dem Formular
        var y_mg_35_dl = mg_UK_l + 6.05 * mg_35_dl;	// Margo Gingivae distolingual 35
        var y_mg_35_l = mg_UK_l + 6.05 * mg_35_l;	// Margo Gingivae lingual 35
        var y_mg_35_ml = mg_UK_l + 6.05 * mg_35_ml;	// Margo Gingivae mesiolingual 35
        var y_st_35_dl = 6.05 * st_35_dl;			// Sondierungstiefe distolingual 35
        var y_st_35_l = 6.05 * st_35_l;				// Sondierungstiefe lingual 35
        var y_st_35_ml = 6.05 * st_35_ml;			// Sondierungstiefe mesiolingual 35
        
    // Berechnung des Attachmentniveaus 35 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_35_db = y_mg_35_db + y_st_35_db;	// Attachmentniveau distobukkal 35
        var y_an_35_b = y_mg_35_b + y_st_35_b;		// Attachmentniveau bukkal 35
        var y_an_35_mb = y_mg_35_mb + y_st_35_mb;	// Attachmentniveau mesiobukkal 35
        
    // Berechnung des Attachmentniveaus 35 (lingual) aus Margo Gingivae und Sondierungstiefe
        var y_an_35_dl = y_mg_35_dl - y_st_35_dl;	// Attachmentniveau distolingual 35
        var y_an_35_l = y_mg_35_l - y_st_35_l;		// Attachmentniveau lingual 35
        var y_an_35_ml = y_mg_35_ml - y_st_35_ml;	// Attachmentniveau mesiolingual 35
        
    // Parodontaltasche 35 bukkal zeichnen
        var string = 
            x_db_35 + ", " + y_an_35_db + "  " + 
            x_b_35 + ", " + y_an_35_b + "  " + 
            x_mb_35 + ", " + y_an_35_mb + "  " + 
            x_mb_35 + ", " + y_mg_35_mb + "  " + 
            x_b_35 + ", " + y_mg_35_b + "  " + 
            x_db_35 + ", " + y_mg_35_db;
        document.getElementById("polygon_35_b").setAttribute("points", string);
    // Attachmentniveau 35 bukkal zeichnen
        var string = 
            x_db_35 + ", " + y_an_35_db + "  " + 
            x_b_35 + ", " + y_an_35_b + "  " + 
            x_mb_35 + ", " + y_an_35_mb;
        document.getElementById("polyline_an_35_b").setAttribute("points", string);
    // Margo Gingivae 35 bukkal zeichnen
        var string =
            x_db_35 + ", " + y_mg_35_db + "  " + 
            x_b_35 + ", " + y_mg_35_b + "  " + 
            x_mb_35 + ", " + y_mg_35_mb;
        document.getElementById("polyline_mg_35_b").setAttribute("points", string);

    // Parodontaltasche 35 lingual zeichnen
        var string = 
            x_dl_35 + ", " + y_an_35_dl + "  " + 
            x_l_35 + ", " + y_an_35_l + "  " + 
            x_ml_35 + ", " + y_an_35_ml + "  " + 
            x_ml_35 + ", " + y_mg_35_ml + "  " + 
            x_l_35 + ", " + y_mg_35_l + "  " + 
            x_dl_35 + ", " + y_mg_35_dl;
        document.getElementById("polygon_35_l").setAttribute("points", string);
    // Attachmentniveau 35 lingual zeichnen
        var string = 
            x_dl_35 + ", " + y_an_35_dl + "  " + 
            x_l_35 + ", " + y_an_35_l + "  " + 
            x_ml_35 + ", " + y_an_35_ml;
        document.getElementById("polyline_an_35_l").setAttribute("points", string);
    // Margo Gingivae 35 lingual zeichnen
        var string =
            x_dl_35 + ", " + y_mg_35_dl + "  " + 
            x_l_35 + ", " + y_mg_35_l + "  " + 
            x_ml_35 + ", " + y_mg_35_ml;
        document.getElementById("polyline_mg_35_l").setAttribute("points", string);
    }
    if (Zahn_35 == 1 && Zahn_34 == 1) {

        st_34_db = document.forms[0]["st_34_db"].value;
        mg_34_db = document.forms[0]["mg_34_db"].value;
        
        st_34_dl = document.forms[0]["st_34_dl"].value;
        mg_34_dl = document.forms[0]["mg_34_dl"].value;
        
    // Set der horizontalen Koordinaten von Zahn 34 (bukkal) in der Bitmap
        var x_db_34 = 824;							// distal 34
        
    // Set der horizontalen Koordinaten von Zahn 34 (lingual) in der Bitmap
        var x_dl_34 = 827;							// distal 34
        
    // Set der vertikalen Koordinaten von Zahn 34 (bukkal) aus dem Formular
        var y_mg_34_db = mg_UK_b - 6.05 * mg_34_db;	// Margo Gingivae distobukkal 34
        var y_st_34_db = 6.05 * st_34_db;			// Sondierungstiefe distobukkal 34
        
    // Set der vertikalen Koordinaten von Zahn 34 (lingual) aus dem Formular
        var y_mg_34_dl = mg_UK_l + 6.05 * mg_34_dl;	// Margo Gingivae distolingual 34
        var y_st_34_dl = 6.05 * st_34_dl;			// Sondierungstiefe distolingual 34
        
    // Berechnung des Attachmentniveaus 34 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_34_db = y_mg_34_db + y_st_34_db;	// Attachmentniveau distobukkal 34
        
    // Berechnung des Attachmentniveaus 34 (lingual) aus Margo Gingivae und Sondierungstiefe
        var y_an_34_dl = y_mg_34_dl - y_st_34_dl;	// Attachmentniveau distolingual 34

    // Parodontaltasche inter_35_34 bukkal zeichnen
        var string = 
            x_mb_35 + ", " + y_an_35_mb + "  " + 
            x_db_34 + ", " + y_an_34_db + "  " + 
            x_db_34 + ", " + y_mg_34_db + "  " + 
            x_mb_35 + ", " + y_mg_35_mb;
        document.getElementById("polygon_inter_35_34_b").setAttribute("points", string);
    // Attachmentniveau inter_35_34 bukkal zeichnen
        var string = 
            x_mb_35 + ", " + y_an_35_mb + "  " + 
            x_db_34 + ", " + y_an_34_db;
        document.getElementById("polyline_an_inter_35_34_b").setAttribute("points", string);
    // Margo Gingivae inter_35_34 bukkal zeichnen
        var string =
            x_mb_35 + ", " + y_mg_35_mb + "  " + 
            x_db_34 + ", " + y_mg_34_db;
        document.getElementById("polyline_mg_inter_35_34_b").setAttribute("points", string);

    // Parodontaltasche inter_35_34 lingual zeichnen
        var string = 
            x_ml_35 + ", " + y_an_35_ml + "  " + 
            x_dl_34 + ", " + y_an_34_dl + "  " + 
            x_dl_34 + ", " + y_mg_34_dl + "  " + 
            x_ml_35 + ", " + y_mg_35_ml;
        document.getElementById("polygon_inter_35_34_l").setAttribute("points", string);
    // Attachmentniveau inter_35_34 lingual zeichnen
        var string = 
            x_ml_35 + ", " + y_an_35_ml + "  " + 
            x_dl_34 + ", " + y_an_34_dl;
        document.getElementById("polyline_an_inter_35_34_l").setAttribute("points", string);
    // Margo Gingivae inter_35_34 lingual zeichnen
        var string =
            x_ml_35 + ", " + y_mg_35_ml + "  " + 
            x_dl_34 + ", " + y_mg_34_dl;
        document.getElementById("polyline_mg_inter_35_34_l").setAttribute("points", string);
    }
    if (Tooth_36 == 1 && Zahn_35 == 1) {

        st_36_mb = document.forms[0]["st_36_mb"].value;
        mg_36_mb = document.forms[0]["mg_36_mb"].value;
        
        st_36_ml = document.forms[0]["st_36_ml"].value;
        mg_36_ml = document.forms[0]["mg_36_ml"].value;
        
    // Set der horizontalen Koordinaten von Zahn 36 (bukkal) in der Bitmap
        var x_mb_36 = 887;							// mesial 36
        
    // Set der horizontalen Koordinaten von Zahn 36 (lingual) in der Bitmap
        var x_ml_36 = 887;							// mesial 36
        
    // Set der vertikalen Koordinaten von Zahn 36 (bukkal) aus dem Formular
        var y_mg_36_mb = mg_UK_b - 6.05 * mg_36_mb;	// Margo Gingivae mesiobukkal 36
        var y_st_36_mb = 6.05 * st_36_mb;			// Sondierungstiefe mesiobukkal 36
        
    // Set der vertikalen Koordinaten von Zahn 36 (lingual) aus dem Formular
        var y_mg_36_ml = mg_UK_l + 6.05 * mg_36_ml;	// Margo Gingivae mesiolingual 36
        var y_st_36_ml = 6.05 * st_36_ml;			// Sondierungstiefe mesiolingual 36
        
    // Berechnung des Attachmentniveaus 36 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_36_mb = y_mg_36_mb + y_st_36_mb;	// Attachmentniveau mesiobukkal 36
        
    // Berechnung des Attachmentniveaus 36 (lingual) aus Margo Gingivae und Sondierungstiefe
        var y_an_36_ml = y_mg_36_ml - y_st_36_ml;	// Attachmentniveau mesiolingual 36

    // Parodontaltasche inter_36_35 bukkal zeichnen
        var string = 
            x_mb_36 + ", " + y_an_36_mb + "  " + 
            x_db_35 + ", " + y_an_35_db + "  " + 
            x_db_35 + ", " + y_mg_35_db + "  " + 
            x_mb_36 + ", " + y_mg_36_mb;
        document.getElementById("polygon_inter_36_35_b").setAttribute("points", string);
    // Attachmentniveau inter_36_35 bukkal zeichnen
        var string = 
            x_mb_36 + ", " + y_an_36_mb + "  " + 
            x_db_35 + ", " + y_an_35_db;
        document.getElementById("polyline_an_inter_36_35_b").setAttribute("points", string);
    // Margo Gingivae inter_36_35 bukkal zeichnen
        var string =
            x_mb_36 + ", " + y_mg_36_mb + "  " + 
            x_db_35 + ", " + y_mg_35_db;
        document.getElementById("polyline_mg_inter_36_35_b").setAttribute("points", string);

    // Parodontaltasche inter_36_35 lingual zeichnen
        var string = 
            x_ml_36 + ", " + y_an_36_ml + "  " + 
            x_dl_35 + ", " + y_an_35_dl + "  " + 
            x_dl_35 + ", " + y_mg_35_dl + "  " + 
            x_ml_36 + ", " + y_mg_36_ml;
        document.getElementById("polygon_inter_36_35_l").setAttribute("points", string);
    // Attachmentniveau inter_36_35 lingual zeichnen
        var string = 
            x_ml_36 + ", " + y_an_36_ml + "  " + 
            x_dl_35 + ", " + y_an_35_dl;
        document.getElementById("polyline_an_inter_36_35_l").setAttribute("points", string);
    // Margo Gingivae inter_36_35 lingual zeichnen
        var string =
            x_ml_36 + ", " + y_mg_36_ml + "  " + 
            x_dl_35 + ", " + y_mg_35_dl;
        document.getElementById("polyline_mg_inter_36_35_l").setAttribute("points", string);
    }
}