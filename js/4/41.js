	// Definition der Variablen fÃ¼r das Formular
    var Tooth_41 = 1;
    var Implant_41 = 0;
    var BOP_41_db = 0;
    var BOP_41_b = 0;
    var BOP_41_mb = 0;
    var PI_41_db = 0;
    var PI_41_b = 0;
    var PI_41_mb = 0;
    var BOP_41_dl = 0;
    var BOP_41_l = 0;
    var BOP_41_ml = 0;
    var PI_41_dl = 0;
    var PI_41_l = 0;
    var PI_41_ml = 0;
    var mg_41_db = 0;
    var mg_41_b = 0;
    var mg_41_mb = 0;
    var st_41_db = 0;
    var st_41_b = 0;
    var st_41_mb = 0;
    var mg_41_dl = 0;
    var mg_41_l = 0;
    var mg_41_ml = 0;
    var st_41_dl = 0;
    var st_41_l = 0;
    var st_41_ml = 0;

function clear_data_41() {
    if (Tooth_41 == 1) {
        mg_41_db = 0;
        mg_41_b = 0;
        mg_41_mb = 0;
        st_41_db = 0;
        st_41_b = 0;
        st_41_mb = 0;

            document.getElementById('mg_41_db_txt').value = 0;
            document.getElementById('mg_41_b_txt').value = 0;
            document.getElementById('mg_41_mb_txt').value = 0;
            
            document.getElementById('st_41_db_txt').value = 0;
            document.getElementById('st_41_b_txt').value = 0;
            document.getElementById('st_41_mb_txt').value = 0;
        
            document.forms[0]["st_41_db"].style.color = 'black'
            document.forms[0]["st_41_b"].style.color = 'black'
            document.forms[0]["st_41_mb"].style.color = 'black'
        
        mg_41_dl = 0;
        mg_41_l = 0;
        mg_41_ml = 0;
        st_41_dl = 0;
        st_41_l = 0;
        st_41_ml = 0;

            document.getElementById('mg_41_dl_txt').value = 0;
            document.getElementById('mg_41_l_txt').value = 0;
            document.getElementById('mg_41_ml_txt').value = 0;
            
            document.getElementById('st_41_dl_txt').value = 0;
            document.getElementById('st_41_l_txt').value = 0;
            document.getElementById('st_41_ml_txt').value = 0;

            document.forms[0]["st_41_dl"].style.color = 'black'
            document.forms[0]["st_41_l"].style.color = 'black'
            document.forms[0]["st_41_ml"].style.color = 'black'
        
        change_probing_41();
        
        mobility_41 = 0;

            document.getElementById('mobility_41_txt').value = "0";

        note_41 = "";

            document.getElementById('note_41_txt').value = "";

        BOP_41_db = 0;
        BOP_41_b = 0;
        BOP_41_mb = 0;
                
        BOP_41_dl = 0;
        BOP_41_l = 0;
        BOP_41_ml = 0;
                
            document.getElementById('BOP_41_db_rectangle').style.display = 'none';
            document.getElementById('BOP_41_b_rectangle').style.display = 'none';
            document.getElementById('BOP_41_mb_rectangle').style.display = 'none';
                
            document.getElementById('BOP_41_dl_rectangle').style.display = 'none';
            document.getElementById('BOP_41_l_rectangle').style.display = 'none';
            document.getElementById('BOP_41_ml_rectangle').style.display = 'none';
            
        PI_41_db = 0;
        PI_41_b = 0;
        PI_41_mb = 0;
                
        PI_41_dl = 0;
        PI_41_l = 0;
        PI_41_ml = 0;

            document.getElementById('PI_41_db_rectangle').style.display = 'none';
            document.getElementById('PI_41_b_rectangle').style.display = 'none';
            document.getElementById('PI_41_mb_rectangle').style.display = 'none';
                
            document.getElementById('PI_41_dl_rectangle').style.display = 'none';
            document.getElementById('PI_41_l_rectangle').style.display = 'none';
            document.getElementById('PI_41_ml_rectangle').style.display = 'none';
    }
}

function toggle_tooth_41() {
    if (Tooth_41 === 1) {
        Tooth_41 = 0;
        document.getElementById('tooth_line_41_b').style.display = 'block';
        document.getElementById('tooth_line_41_l').style.display = 'block';
        
        document.getElementById('mobility_41_txt').style.display = 'none';
        
        document.getElementById('implant_41_btn').style.display = 'none';
        document.getElementById('implant_41_tab').style.display = 'none';
        document.getElementById('implant_41_b_image').style.display = 'none';
        document.getElementById('implant_41_l_image').style.display = 'none';
        
        document.getElementById('mg_41_db_txt').style.display = 'none';
        document.getElementById('mg_41_b_txt').style.display = 'none';
        document.getElementById('mg_41_mb_txt').style.display = 'none';
        
        document.getElementById('st_41_db_txt').style.display = 'none';
        document.getElementById('st_41_b_txt').style.display = 'none';
        document.getElementById('st_41_mb_txt').style.display = 'none';
        
        document.getElementById('mg_41_dl_txt').style.display = 'none';
        document.getElementById('mg_41_l_txt').style.display = 'none';
        document.getElementById('mg_41_ml_txt').style.display = 'none';
        
        document.getElementById('st_41_dl_txt').style.display = 'none';
        document.getElementById('st_41_l_txt').style.display = 'none';
        document.getElementById('st_41_ml_txt').style.display = 'none';
        
        document.getElementById('BOP_41_db_rectangle').style.display = 'none';
        document.getElementById('BOP_41_b_rectangle').style.display = 'none';
        document.getElementById('BOP_41_mb_rectangle').style.display = 'none';
        
        document.getElementById('BOP_41_dl_rectangle').style.display = 'none';
        document.getElementById('BOP_41_l_rectangle').style.display = 'none';
        document.getElementById('BOP_41_ml_rectangle').style.display = 'none';
        
        document.getElementById('BOP_41_db_btn').style.display = 'none';
        document.getElementById('BOP_41_b_btn').style.display = 'none';
        document.getElementById('BOP_41_mb_btn').style.display = 'none';
        
        document.getElementById('BOP_41_dl_btn').style.display = 'none';
        document.getElementById('BOP_41_l_btn').style.display = 'none';
        document.getElementById('BOP_41_ml_btn').style.display = 'none';
        
        document.getElementById('PI_41_db_rectangle').style.display = 'none';
        document.getElementById('PI_41_b_rectangle').style.display = 'none';
        document.getElementById('PI_41_mb_rectangle').style.display = 'none';
        
        document.getElementById('PI_41_dl_rectangle').style.display = 'none';
        document.getElementById('PI_41_l_rectangle').style.display = 'none';
        document.getElementById('PI_41_ml_rectangle').style.display = 'none';
        
        document.getElementById('PI_41_db_btn').style.display = 'none';
        document.getElementById('PI_41_b_btn').style.display = 'none';
        document.getElementById('PI_41_mb_btn').style.display = 'none';
        
        document.getElementById('PI_41_dl_btn').style.display = 'none';
        document.getElementById('PI_41_l_btn').style.display = 'none';
        document.getElementById('PI_41_ml_btn').style.display = 'none';
        
        document.getElementById('polygon_41_b').style.display = 'none';
        document.getElementById('polyline_an_41_b').style.display = 'none';
        document.getElementById('polyline_mg_41_b').style.display = 'none';
        
        document.getElementById('polygon_41_l').style.display = 'none';
        document.getElementById('polyline_an_41_l').style.display = 'none';
        document.getElementById('polyline_mg_41_l').style.display = 'none';
        
        document.getElementById('polygon_inter_42_41_b').style.display = 'none';            
        document.getElementById('polyline_an_inter_42_41_b').style.display = 'none';            
        document.getElementById('polyline_mg_inter_42_41_b').style.display = 'none';            
        
        document.getElementById('polygon_inter_42_41_l').style.display = 'none';            
        document.getElementById('polyline_an_inter_42_41_l').style.display = 'none';            
        document.getElementById('polyline_mg_inter_42_41_l').style.display = 'none';            
        
        document.getElementById('note_41_txt').style.display = 'none';
    }
    else if (Implant_41 !== 1) {
        Tooth_41 = 1;
        document.getElementById('tooth_line_41_b').style.display = 'none';
        document.getElementById('tooth_line_41_l').style.display = 'none';

        document.getElementById('mobility_41_txt').style.display = 'block';

        document.getElementById('implant_41_btn').style.display = 'block';

        document.getElementById('mg_41_db_txt').style.display = 'block';
        document.getElementById('mg_41_b_txt').style.display = 'block';
        document.getElementById('mg_41_mb_txt').style.display = 'block';
        
        document.getElementById('st_41_db_txt').style.display = 'block';
        document.getElementById('st_41_b_txt').style.display = 'block';
        document.getElementById('st_41_mb_txt').style.display = 'block';
        
        document.getElementById('mg_41_dl_txt').style.display = 'block';
        document.getElementById('mg_41_l_txt').style.display = 'block';
        document.getElementById('mg_41_ml_txt').style.display = 'block';
        
        document.getElementById('st_41_dl_txt').style.display = 'block';
        document.getElementById('st_41_l_txt').style.display = 'block';
        document.getElementById('st_41_ml_txt').style.display = 'block';
        
        document.getElementById('note_41_txt').style.display = 'block';

        document.getElementById('polygon_41_b').style.display = 'block';
        document.getElementById('polyline_an_41_b').style.display = 'block';
        document.getElementById('polyline_mg_41_b').style.display = 'block';
        
        document.getElementById('polygon_41_l').style.display = 'block';
        document.getElementById('polyline_an_41_l').style.display = 'block';
        document.getElementById('polyline_mg_41_l').style.display = 'block';

        if (Tooth_42 == 1 && Tooth_41 == 1) {
            document.getElementById('polygon_inter_42_41_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_42_41_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_42_41_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_42_41_l').style.display = 'block';            
            document.getElementById('polyline_an_inter_42_41_l').style.display = 'block';            
            document.getElementById('polyline_mg_inter_42_41_l').style.display = 'block';            
        }            

        document.getElementById('BOP_41_db_btn').style.display = 'block';
        document.getElementById('BOP_41_b_btn').style.display = 'block';
        document.getElementById('BOP_41_mb_btn').style.display = 'block';

        document.getElementById('BOP_41_dl_btn').style.display = 'block';
        document.getElementById('BOP_41_l_btn').style.display = 'block';
        document.getElementById('BOP_41_ml_btn').style.display = 'block';
        
        if (BOP_41_db == 1) {
            document.getElementById('BOP_41_db_rectangle').style.display = 'block';
        }
        if (BOP_41_b == 1) {
            document.getElementById('BOP_41_b_rectangle').style.display = 'block';
        }
        if (BOP_41_mb == 1) {
            document.getElementById('BOP_41_mb_rectangle').style.display = 'block';
        }
        if (BOP_41_dl == 1) {
            document.getElementById('BOP_41_dl_rectangle').style.display = 'block';
        }
        if (BOP_41_l == 1) {
            document.getElementById('BOP_41_l_rectangle').style.display = 'block';
        }
        if (BOP_41_ml == 1) {
            document.getElementById('BOP_41_ml_rectangle').style.display = 'block';
        }
        
        document.getElementById('PI_41_db_btn').style.display = 'block';
        document.getElementById('PI_41_b_btn').style.display = 'block';
        document.getElementById('PI_41_mb_btn').style.display = 'block';

        document.getElementById('PI_41_dl_btn').style.display = 'block';
        document.getElementById('PI_41_l_btn').style.display = 'block';
        document.getElementById('PI_41_ml_btn').style.display = 'block';
        
        if (PI_41_db == 1) {
            document.getElementById('PI_41_db_rectangle').style.display = 'block';
        }
        if (PI_41_b == 1) {
            document.getElementById('PI_41_b_rectangle').style.display = 'block';
        }
        if (PI_41_mb == 1) {
            document.getElementById('PI_41_mb_rectangle').style.display = 'block';
        }
        if (PI_41_dl == 1) {
            document.getElementById('PI_41_dl_rectangle').style.display = 'block';
        }
        if (PI_41_l == 1) {
            document.getElementById('PI_41_l_rectangle').style.display = 'block';
        }
        if (PI_41_ml == 1) {
            document.getElementById('PI_41_ml_rectangle').style.display = 'block';
        }
    }		
    else if (Implant_41 == 1) {
        Tooth_41 = 1;
        document.getElementById('tooth_line_41_b').style.display = 'none';
        document.getElementById('tooth_line_41_l').style.display = 'none';

        document.getElementById('mobility_41_txt').style.display = 'block';
        
        document.getElementById('note_41_txt').style.display = 'block';

        document.getElementById('implant_41_btn').style.display = 'block';
        document.getElementById('implant_41_tab').style.display = 'block';
        document.getElementById('implant_41_b_image').style.display = 'block';
        document.getElementById('implant_41_l_image').style.display = 'block';

        document.getElementById('mg_41_db_txt').style.display = 'block';
        document.getElementById('mg_41_b_txt').style.display = 'block';
        document.getElementById('mg_41_mb_txt').style.display = 'block';
        
        document.getElementById('st_41_db_txt').style.display = 'block';
        document.getElementById('st_41_b_txt').style.display = 'block';
        document.getElementById('st_41_mb_txt').style.display = 'block';
        
        document.getElementById('mg_41_dl_txt').style.display = 'block';
        document.getElementById('mg_41_l_txt').style.display = 'block';
        document.getElementById('mg_41_ml_txt').style.display = 'block';
        
        document.getElementById('st_41_dl_txt').style.display = 'block';
        document.getElementById('st_41_l_txt').style.display = 'block';
        document.getElementById('st_41_ml_txt').style.display = 'block';

        document.getElementById('polygon_41_b').style.display = 'block';
        document.getElementById('polyline_an_41_b').style.display = 'block';
        document.getElementById('polyline_mg_41_b').style.display = 'block';
        
        document.getElementById('polygon_41_l').style.display = 'block';
        document.getElementById('polyline_an_41_l').style.display = 'block';
        document.getElementById('polyline_mg_41_l').style.display = 'block';

        if (Tooth_42 == 1 && Tooth_41 == 1) {
            document.getElementById('polygon_inter_42_41_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_42_41_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_42_41_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_42_41_l').style.display = 'block';            
            document.getElementById('polyline_an_inter_42_41_l').style.display = 'block';            
            document.getElementById('polyline_mg_inter_42_41_l').style.display = 'block';            
        }            

        document.getElementById('BOP_41_db_btn').style.display = 'block';
        document.getElementById('BOP_41_b_btn').style.display = 'block';
        document.getElementById('BOP_41_mb_btn').style.display = 'block';

        document.getElementById('BOP_41_dl_btn').style.display = 'block';
        document.getElementById('BOP_41_l_btn').style.display = 'block';
        document.getElementById('BOP_41_ml_btn').style.display = 'block';
        
        document.getElementById('PI_41_db_btn').style.display = 'block';
        document.getElementById('PI_41_b_btn').style.display = 'block';
        document.getElementById('PI_41_mb_btn').style.display = 'block';

        document.getElementById('PI_41_dl_btn').style.display = 'block';
        document.getElementById('PI_41_l_btn').style.display = 'block';
        document.getElementById('PI_41_ml_btn').style.display = 'block';
        
        if (BOP_41_db == 1) {
            document.getElementById('BOP_41_db_rectangle').style.display = 'block';
        }
        if (BOP_41_b == 1) {
            document.getElementById('BOP_41_b_rectangle').style.display = 'block';
        }
        if (BOP_41_mb == 1) {
            document.getElementById('BOP_41_mb_rectangle').style.display = 'block';
        }
        if (BOP_41_dl == 1) {
            document.getElementById('BOP_41_dl_rectangle').style.display = 'block';
        }
        if (BOP_41_l == 1) {
            document.getElementById('BOP_41_l_rectangle').style.display = 'block';
        }
        if (BOP_41_ml == 1) {
            document.getElementById('BOP_41_ml_rectangle').style.display = 'block';
        }
        
        if (PI_41_db == 1) {
            document.getElementById('PI_41_db_rectangle').style.display = 'block';
        }
        if (PI_41_b == 1) {
            document.getElementById('PI_41_b_rectangle').style.display = 'block';
        }
        if (PI_41_mb == 1) {
            document.getElementById('PI_41_mb_rectangle').style.display = 'block';
        }
        if (PI_41_dl == 1) {
            document.getElementById('PI_41_dl_rectangle').style.display = 'block';
        }
        if (PI_41_l == 1) {
            document.getElementById('PI_41_l_rectangle').style.display = 'block';
        }
        if (PI_41_ml == 1) {
            document.getElementById('PI_41_ml_rectangle').style.display = 'block';
        }
    }
}		

function toggle_implant_41() {
    if (Implant_41 == 0) {
        Implant_41 = 1;
        
        document.getElementById('implant_41_b_image').style.display = 'block';
        document.getElementById('implant_41_l_image').style.display = 'block';
        document.getElementById('implant_41_tab').style.display = 'block';
    }
    else {
        Implant_41 = 0;
        
        document.getElementById('implant_41_b_image').style.display = 'none';
        document.getElementById('implant_41_l_image').style.display = 'none';
        document.getElementById('implant_41_tab').style.display = 'none';
    }
}

function toggle_BOP_41_db() {
    if (BOP_41_db == 0) {
        BOP_41_db = 1;
        document.getElementById('BOP_41_db_rectangle').style.display = 'block';
    }
    else {
        BOP_41_db = 0;
        document.getElementById('BOP_41_db_rectangle').style.display = 'none';
    }
}

function toggle_BOP_41_b() {
    if (BOP_41_b == 0) {
        BOP_41_b = 1;
        document.getElementById('BOP_41_b_rectangle').style.display = 'block';
    }
    else {
        BOP_41_b = 0;
        document.getElementById('BOP_41_b_rectangle').style.display = 'none';
    }
}

function toggle_BOP_41_mb() {
    if (BOP_41_mb == 0) {
        BOP_41_mb = 1;
        document.getElementById('BOP_41_mb_rectangle').style.display = 'block';
    }
    else {
        BOP_41_mb = 0;
        document.getElementById('BOP_41_mb_rectangle').style.display = 'none';
    }
}

function toggle_PI_41_db() {
    if (PI_41_db == 0) {
        PI_41_db = 1;
        document.getElementById('PI_41_db_rectangle').style.display = 'block';
    }
    else {
        PI_41_db = 0;
        document.getElementById('PI_41_db_rectangle').style.display = 'none';
    }
}

function toggle_PI_41_b() {
    if (PI_41_b == 0) {
        PI_41_b = 1;
        document.getElementById('PI_41_b_rectangle').style.display = 'block';
    }
    else {
        PI_41_b = 0;
        document.getElementById('PI_41_b_rectangle').style.display = 'none';
    }
}

function toggle_PI_41_mb() {
    if (PI_41_mb == 0) {
        PI_41_mb = 1;
        document.getElementById('PI_41_mb_rectangle').style.display = 'block';
    }
    else {
        PI_41_mb = 0;
        document.getElementById('PI_41_mb_rectangle').style.display = 'none';
    }
}

function toggle_BOP_41_dl() {
    if (BOP_41_dl == 0) {
        BOP_41_dl = 1;
        document.getElementById('BOP_41_dl_rectangle').style.display = 'block';
    }
    else {
        BOP_41_dl = 0;
        document.getElementById('BOP_41_dl_rectangle').style.display = 'none';
    }
}

function toggle_BOP_41_l() {
    if (BOP_41_l == 0) {
        BOP_41_l = 1;
        document.getElementById('BOP_41_l_rectangle').style.display = 'block';
    }
    else {
        BOP_41_l = 0;
        document.getElementById('BOP_41_l_rectangle').style.display = 'none';
    }
}

function toggle_BOP_41_ml() {
    if (BOP_41_ml == 0) {
        BOP_41_ml = 1;
        document.getElementById('BOP_41_ml_rectangle').style.display = 'block';
    }
    else {
        BOP_41_ml = 0;
        document.getElementById('BOP_41_ml_rectangle').style.display = 'none';
    }
}

function toggle_PI_41_dl() {
    if (PI_41_dl == 0) {
        PI_41_dl = 1;
        document.getElementById('PI_41_dl_rectangle').style.display = 'block';
    }
    else {
        PI_41_dl = 0;
        document.getElementById('PI_41_dl_rectangle').style.display = 'none';
    }
}

function toggle_PI_41_l() {
    if (PI_41_l == 0) {
        PI_41_l = 1;
        document.getElementById('PI_41_l_rectangle').style.display = 'block';
    }
    else {
        PI_41_l = 0;
        document.getElementById('PI_41_l_rectangle').style.display = 'none';
    }
}

function toggle_PI_41_ml() {
    if (PI_41_ml == 0) {
        PI_41_ml = 1;
        document.getElementById('PI_41_ml_rectangle').style.display = 'block';
    }
    else {
        PI_41_ml = 0;
        document.getElementById('PI_41_ml_rectangle').style.display = 'none';
    }
}

function change_probing_41() {
    if (Tooth_41 == 1) {
        
    // Variablen aus dem Formular
        st_41_db = document.forms[0]["st_41_db"].value;
        st_41_b = document.forms[0]["st_41_b"].value;
        st_41_mb = document.forms[0]["st_41_mb"].value;

        if (document.forms[0]["st_41_dl"].value > 3) {document.forms[0]["st_41_dl"].style.color = 'red';} else {document.forms[0]["st_41_dl"].style.color = 'black'};
        if (document.forms[0]["st_41_l"].value > 3) {document.forms[0]["st_41_l"].style.color = 'red';} else {document.forms[0]["st_41_l"].style.color = 'black'};
        if (document.forms[0]["st_41_ml"].value > 3) {document.forms[0]["st_41_ml"].style.color = 'red';} else {document.forms[0]["st_41_ml"].style.color = 'black'};
        
        mg_41_db = document.forms[0]["mg_41_db"].value;
        mg_41_b = document.forms[0]["mg_41_b"].value;
        mg_41_mb = document.forms[0]["mg_41_mb"].value;
        
        st_41_dl = document.forms[0]["st_41_dl"].value;
        st_41_l = document.forms[0]["st_41_l"].value;
        st_41_ml = document.forms[0]["st_41_ml"].value;

        if (document.forms[0]["st_41_db"].value > 3) {document.forms[0]["st_41_db"].style.color = 'red';} else {document.forms[0]["st_41_db"].style.color = 'black'};
        if (document.forms[0]["st_41_b"].value > 3) {document.forms[0]["st_41_b"].style.color = 'red';} else {document.forms[0]["st_41_b"].style.color = 'black'};
        if (document.forms[0]["st_41_mb"].value > 3) {document.forms[0]["st_41_mb"].style.color = 'red';} else {document.forms[0]["st_41_mb"].style.color = 'black'};
        
        mg_41_dl = document.forms[0]["mg_41_dl"].value;
        mg_41_l = document.forms[0]["mg_41_l"].value;
        mg_41_ml = document.forms[0]["mg_41_ml"].value;

    // Set der horizontalen Koordinaten von Zahn 41 (bukkal) in der Bitmap
        var x_db_41 = 643;							// distal 41
        var x_mb_41 = 662;							// mesial 41
        var x_b_41 = (x_db_41 + x_mb_41)/2;			// bukkal 41
        
    // Set der horizontalen Koordinaten von Zahn 41 (lingual) in der Bitmap
        var x_dl_41 = 642;							// distal 41
        var x_ml_41 = 661;							// mesial 41
        var x_l_41 = (x_dl_41 + x_ml_41)/2;			// lingual 41
        
    // Set der vertikalen Koordinaten von Zahn 41 (bukkal) aus dem Formular
        var y_mg_41_db = mg_UK_b - 6.05 * mg_41_db;	// Margo Gingivae distobukkal 41
        var y_mg_41_b = mg_UK_b - 6.05 * mg_41_b;	// Margo Gingivae bukkal 41
        var y_mg_41_mb = mg_UK_b - 6.05 * mg_41_mb;	// Margo Gingivae mesiobukkal 41
        var y_st_41_db = 6.05 * st_41_db;			// Sondierungstiefe distobukkal 41
        var y_st_41_b = 6.05 * st_41_b;				// Sondierungstiefe bukkal 41
        var y_st_41_mb = 6.05 * st_41_mb;			// Sondierungstiefe mesiobukkal 41
        
    // Set der vertikalen Koordinaten von Zahn 41 (lingual) aus dem Formular
        var y_mg_41_dl = mg_UK_l + 6.05 * mg_41_dl;	// Margo Gingivae distolingual 41
        var y_mg_41_l = mg_UK_l + 6.05 * mg_41_l;	// Margo Gingivae lingual 41
        var y_mg_41_ml = mg_UK_l + 6.05 * mg_41_ml;	// Margo Gingivae mesiolingual 41
        var y_st_41_dl = 6.05 * st_41_dl;			// Sondierungstiefe distolingual 41
        var y_st_41_l = 6.05 * st_41_l;				// Sondierungstiefe lingual 41
        var y_st_41_ml = 6.05 * st_41_ml;			// Sondierungstiefe mesiolingual 41
        
    // Berechnung des Attachmentniveaus 41 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_41_db = y_mg_41_db + y_st_41_db;	// Attachmentniveau distobukkal 41
        var y_an_41_b = y_mg_41_b + y_st_41_b;		// Attachmentniveau bukkal 41
        var y_an_41_mb = y_mg_41_mb + y_st_41_mb;	// Attachmentniveau mesiobukkal 41
        
    // Berechnung des Attachmentniveaus 41 (lingual) aus Margo Gingivae und Sondierungstiefe
        var y_an_41_dl = y_mg_41_dl - y_st_41_dl;	// Attachmentniveau distolingual 41
        var y_an_41_l = y_mg_41_l - y_st_41_l;		// Attachmentniveau lingual 41
        var y_an_41_ml = y_mg_41_ml - y_st_41_ml;	// Attachmentniveau mesiolingual 41
        
    // Parodontaltasche 41 bukkal zeichnen
        var string = 
            x_db_41 + ", " + y_an_41_db + "  " + 
            x_b_41 + ", " + y_an_41_b + "  " + 
            x_mb_41 + ", " + y_an_41_mb + "  " + 
            x_mb_41 + ", " + y_mg_41_mb + "  " + 
            x_b_41 + ", " + y_mg_41_b + "  " + 
            x_db_41 + ", " + y_mg_41_db;
        document.getElementById("polygon_41_b").setAttribute("points", string);
    // Attachmentniveau 41 bukkal zeichnen
        var string = 
            x_db_41 + ", " + y_an_41_db + "  " + 
            x_b_41 + ", " + y_an_41_b + "  " + 
            x_mb_41 + ", " + y_an_41_mb;
        document.getElementById("polyline_an_41_b").setAttribute("points", string);
    // Margo Gingivae 41 bukkal zeichnen
        var string =
            x_db_41 + ", " + y_mg_41_db + "  " + 
            x_b_41 + ", " + y_mg_41_b + "  " + 
            x_mb_41 + ", " + y_mg_41_mb;
        document.getElementById("polyline_mg_41_b").setAttribute("points", string);

    // Parodontaltasche 41 lingual zeichnen
        var string = 
            x_dl_41 + ", " + y_an_41_dl + "  " + 
            x_l_41 + ", " + y_an_41_l + "  " + 
            x_ml_41 + ", " + y_an_41_ml + "  " + 
            x_ml_41 + ", " + y_mg_41_ml + "  " + 
            x_l_41 + ", " + y_mg_41_l + "  " + 
            x_dl_41 + ", " + y_mg_41_dl;
        document.getElementById("polygon_41_l").setAttribute("points", string);
    // Attachmentniveau 41 lingual zeichnen
        var string = 
            x_dl_41 + ", " + y_an_41_dl + "  " + 
            x_l_41 + ", " + y_an_41_l + "  " + 
            x_ml_41 + ", " + y_an_41_ml;
        document.getElementById("polyline_an_41_l").setAttribute("points", string);
    // Margo Gingivae 41 lingual zeichnen
        var string =
            x_dl_41 + ", " + y_mg_41_dl + "  " + 
            x_l_41 + ", " + y_mg_41_l + "  " + 
            x_ml_41 + ", " + y_mg_41_ml;
        document.getElementById("polyline_mg_41_l").setAttribute("points", string);
    }
    if (Tooth_42 == 1 && Tooth_41 == 1) {

        st_42_mb = document.forms[0]["st_42_mb"].value;
        mg_42_mb = document.forms[0]["mg_42_mb"].value;
        
        st_42_ml = document.forms[0]["st_42_ml"].value;
        mg_42_ml = document.forms[0]["mg_42_ml"].value;
        
    // Set der horizontalen Koordinaten von Zahn 42 (bukkal) in der Bitmap
        var x_mb_42 = 629;							// mesial 42
        
    // Set der horizontalen Koordinaten von Zahn 42 (lingual) in der Bitmap
        var x_ml_42 = 625;							// mesial 42
        
    // Set der vertikalen Koordinaten von Zahn 42 (bukkal) aus dem Formular
        var y_mg_42_mb = mg_UK_b - 6.05 * mg_42_mb;	// Margo Gingivae mesiobukkal 42
        var y_st_42_mb = 6.05 * st_42_mb;			// Sondierungstiefe mesiobukkal 42
        
    // Set der vertikalen Koordinaten von Zahn 42 (lingual) aus dem Formular
        var y_mg_42_ml = mg_UK_l + 6.05 * mg_42_ml;	// Margo Gingivae mesiolingual 42
        var y_st_42_ml = 6.05 * st_42_ml;			// Sondierungstiefe mesiolingual 42
        
    // Berechnung des Attachmentniveaus 42 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_42_mb = y_mg_42_mb + y_st_42_mb;	// Attachmentniveau mesiobukkal 42
        
    // Berechnung des Attachmentniveaus 42 (lingual) aus Margo Gingivae und Sondierungstiefe
        var y_an_42_ml = y_mg_42_ml - y_st_42_ml;	// Attachmentniveau mesiolingual 42

    // Parodontaltasche inter_42_41 bukkal zeichnen
        var string = 
            x_mb_42 + ", " + y_an_42_mb + "  " + 
            x_db_41 + ", " + y_an_41_db + "  " + 
            x_db_41 + ", " + y_mg_41_db + "  " + 
            x_mb_42 + ", " + y_mg_42_mb;
        document.getElementById("polygon_inter_42_41_b").setAttribute("points", string);
    // Attachmentniveau inter_42_41 bukkal zeichnen
        var string = 
            x_mb_42 + ", " + y_an_42_mb + "  " + 
            x_db_41 + ", " + y_an_41_db;
        document.getElementById("polyline_an_inter_42_41_b").setAttribute("points", string);
    // Margo Gingivae inter_42_41 bukkal zeichnen
        var string =
            x_mb_42 + ", " + y_mg_42_mb + "  " + 
            x_db_41 + ", " + y_mg_41_db;
        document.getElementById("polyline_mg_inter_42_41_b").setAttribute("points", string);

    // Parodontaltasche inter_42_41 lingual zeichnen
        var string = 
            x_ml_42 + ", " + y_an_42_ml + "  " + 
            x_dl_41 + ", " + y_an_41_dl + "  " + 
            x_dl_41 + ", " + y_mg_41_dl + "  " + 
            x_ml_42 + ", " + y_mg_42_ml;
        document.getElementById("polygon_inter_42_41_l").setAttribute("points", string);
    // Attachmentniveau inter_42_41 lingual zeichnen
        var string = 
            x_ml_42 + ", " + y_an_42_ml + "  " + 
            x_dl_41 + ", " + y_an_41_dl;
        document.getElementById("polyline_an_inter_42_41_l").setAttribute("points", string);
    // Margo Gingivae inter_42_41 lingual zeichnen
        var string =
            x_ml_42 + ", " + y_mg_42_ml + "  " + 
            x_dl_41 + ", " + y_mg_41_dl;
        document.getElementById("polyline_mg_inter_42_41_l").setAttribute("points", string);
    }
}