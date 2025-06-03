	// Definition der Variablen fÃ¼r das Formular
    var Tooth_46 = 1;
    var Furcation_46_b = 0;
    var Furcation_46_l = 0;
    var Implant_46 = 0;
    var BOP_46_db = 0;
    var BOP_46_b = 0;
    var BOP_46_mb = 0;
    var PI_46_db = 0;
    var PI_46_b = 0;
    var PI_46_mb = 0;
    var BOP_46_dl = 0;
    var BOP_46_l = 0;
    var BOP_46_ml = 0;
    var PI_46_dl = 0;
    var PI_46_l = 0;
    var PI_46_ml = 0;
    var mg_46_db = 0;
    var mg_46_b = 0;
    var mg_46_mb = 0;
    var st_46_db = 0;
    var st_46_b = 0;
    var st_46_mb = 0;
    var mg_46_dl = 0;
    var mg_46_l = 0;
    var mg_46_ml = 0;
    var st_46_dl = 0;
    var st_46_l = 0;
    var st_46_ml = 0;

function clear_data_46() {
    if (Tooth_46 == 1) {
        mg_46_db = 0;
        mg_46_b = 0;
        mg_46_mb = 0;
        st_46_db = 0;
        st_46_b = 0;
        st_46_mb = 0;

            document.getElementById('mg_46_db_txt').value = 0;
            document.getElementById('mg_46_b_txt').value = 0;
            document.getElementById('mg_46_mb_txt').value = 0;
            
            document.getElementById('st_46_db_txt').value = 0;
            document.getElementById('st_46_b_txt').value = 0;
            document.getElementById('st_46_mb_txt').value = 0;
        
            document.forms[0]["st_46_db"].style.color = 'black'
            document.forms[0]["st_46_b"].style.color = 'black'
            document.forms[0]["st_46_mb"].style.color = 'black'
        
        mg_46_dl = 0;
        mg_46_l = 0;
        mg_46_ml = 0;
        st_46_dl = 0;
        st_46_l = 0;
        st_46_ml = 0;

            document.getElementById('mg_46_dl_txt').value = 0;
            document.getElementById('mg_46_l_txt').value = 0;
            document.getElementById('mg_46_ml_txt').value = 0;
            
            document.getElementById('st_46_dl_txt').value = 0;
            document.getElementById('st_46_l_txt').value = 0;
            document.getElementById('st_46_ml_txt').value = 0;

            document.forms[0]["st_46_dl"].style.color = 'black'
            document.forms[0]["st_46_l"].style.color = 'black'
            document.forms[0]["st_46_ml"].style.color = 'black'
        
        change_probing_46();
        
        mobility_46 = 0;

            document.getElementById('mobility_46_txt').value = "0";

        note_46 = "";

            document.getElementById('note_46_txt').value = "";

        Furcation_46_b = 0;
        Furcation_46_l = 0;

            document.getElementById('furcation_1_46_b').style.display = 'none';
            document.getElementById('furcation_2_46_b').style.display = 'none';
            document.getElementById('furcation_3_46_b').style.display = 'none';
                
            document.getElementById('furcation_1_46_b_tab').style.display = 'none';
            document.getElementById('furcation_2_46_b_tab').style.display = 'none';
            document.getElementById('furcation_3_46_b_tab').style.display = 'none';
            
            document.getElementById('furcation_1_46_l').style.display = 'none';
            document.getElementById('furcation_2_46_l').style.display = 'none';
            document.getElementById('furcation_3_46_l').style.display = 'none';
                
            document.getElementById('furcation_1_46_l_tab').style.display = 'none';
            document.getElementById('furcation_2_46_l_tab').style.display = 'none';
            document.getElementById('furcation_3_46_l_tab').style.display = 'none';
            
        BOP_46_db = 0;
        BOP_46_b = 0;
        BOP_46_mb = 0;
                
        BOP_46_dl = 0;
        BOP_46_l = 0;
        BOP_46_ml = 0;
                
            document.getElementById('BOP_46_db_rectangle').style.display = 'none';
            document.getElementById('BOP_46_b_rectangle').style.display = 'none';
            document.getElementById('BOP_46_mb_rectangle').style.display = 'none';
                
            document.getElementById('BOP_46_dl_rectangle').style.display = 'none';
            document.getElementById('BOP_46_l_rectangle').style.display = 'none';
            document.getElementById('BOP_46_ml_rectangle').style.display = 'none';
            
        PI_46_db = 0;
        PI_46_b = 0;
        PI_46_mb = 0;
                
        PI_46_dl = 0;
        PI_46_l = 0;
        PI_46_ml = 0;

            document.getElementById('PI_46_db_rectangle').style.display = 'none';
            document.getElementById('PI_46_b_rectangle').style.display = 'none';
            document.getElementById('PI_46_mb_rectangle').style.display = 'none';
                
            document.getElementById('PI_46_dl_rectangle').style.display = 'none';
            document.getElementById('PI_46_l_rectangle').style.display = 'none';
            document.getElementById('PI_46_ml_rectangle').style.display = 'none';
    }
}

function toggle_tooth_46() {
    if (Tooth_46 === 1) {
        Tooth_46 = 0;
        document.getElementById('tooth_line_46_b').style.display = 'block';
        document.getElementById('tooth_line_46_l').style.display = 'block';
        
        document.getElementById('mobility_46_txt').style.display = 'none';
        
        document.getElementById('implant_46_btn').style.display = 'none';
        document.getElementById('implant_46_tab').style.display = 'none';
        document.getElementById('implant_46_b_image').style.display = 'none';
        document.getElementById('implant_46_l_image').style.display = 'none';
        
        document.getElementById('furcation_46_b_btn').style.display = 'none';
        document.getElementById('furcation_46_l_btn').style.display = 'none';
        
        document.getElementById('furcation_1_46_b').style.display = 'none';
        document.getElementById('furcation_2_46_b').style.display = 'none';
        document.getElementById('furcation_3_46_b').style.display = 'none';
        
        document.getElementById('furcation_1_46_b_tab').style.display = 'none';
        document.getElementById('furcation_2_46_b_tab').style.display = 'none';
        document.getElementById('furcation_3_46_b_tab').style.display = 'none';
        
        document.getElementById('furcation_1_46_l').style.display = 'none';
        document.getElementById('furcation_2_46_l').style.display = 'none';
        document.getElementById('furcation_3_46_l').style.display = 'none';
        
        document.getElementById('furcation_1_46_l_tab').style.display = 'none';
        document.getElementById('furcation_2_46_l_tab').style.display = 'none';
        document.getElementById('furcation_3_46_l_tab').style.display = 'none';
        
        document.getElementById('mg_46_db_txt').style.display = 'none';
        document.getElementById('mg_46_b_txt').style.display = 'none';
        document.getElementById('mg_46_mb_txt').style.display = 'none';
        
        document.getElementById('st_46_db_txt').style.display = 'none';
        document.getElementById('st_46_b_txt').style.display = 'none';
        document.getElementById('st_46_mb_txt').style.display = 'none';
        
        document.getElementById('mg_46_dl_txt').style.display = 'none';
        document.getElementById('mg_46_l_txt').style.display = 'none';
        document.getElementById('mg_46_ml_txt').style.display = 'none';
        
        document.getElementById('st_46_dl_txt').style.display = 'none';
        document.getElementById('st_46_l_txt').style.display = 'none';
        document.getElementById('st_46_ml_txt').style.display = 'none';
        
        document.getElementById('BOP_46_db_rectangle').style.display = 'none';
        document.getElementById('BOP_46_b_rectangle').style.display = 'none';
        document.getElementById('BOP_46_mb_rectangle').style.display = 'none';
        
        document.getElementById('BOP_46_dl_rectangle').style.display = 'none';
        document.getElementById('BOP_46_l_rectangle').style.display = 'none';
        document.getElementById('BOP_46_ml_rectangle').style.display = 'none';
        
        document.getElementById('BOP_46_db_btn').style.display = 'none';
        document.getElementById('BOP_46_b_btn').style.display = 'none';
        document.getElementById('BOP_46_mb_btn').style.display = 'none';
        
        document.getElementById('BOP_46_dl_btn').style.display = 'none';
        document.getElementById('BOP_46_l_btn').style.display = 'none';
        document.getElementById('BOP_46_ml_btn').style.display = 'none';
        
        document.getElementById('PI_46_db_rectangle').style.display = 'none';
        document.getElementById('PI_46_b_rectangle').style.display = 'none';
        document.getElementById('PI_46_mb_rectangle').style.display = 'none';
        
        document.getElementById('PI_46_dl_rectangle').style.display = 'none';
        document.getElementById('PI_46_l_rectangle').style.display = 'none';
        document.getElementById('PI_46_ml_rectangle').style.display = 'none';
        
        document.getElementById('PI_46_db_btn').style.display = 'none';
        document.getElementById('PI_46_b_btn').style.display = 'none';
        document.getElementById('PI_46_mb_btn').style.display = 'none';
        
        document.getElementById('PI_46_dl_btn').style.display = 'none';
        document.getElementById('PI_46_l_btn').style.display = 'none';
        document.getElementById('PI_46_ml_btn').style.display = 'none';
        
        document.getElementById('polygon_46_b').style.display = 'none';
        document.getElementById('polyline_an_46_b').style.display = 'none';
        document.getElementById('polyline_mg_46_b').style.display = 'none';
        
        document.getElementById('polygon_46_l').style.display = 'none';
        document.getElementById('polyline_an_46_l').style.display = 'none';
        document.getElementById('polyline_mg_46_l').style.display = 'none';
        
        document.getElementById('polygon_inter_47_46_b').style.display = 'none';            
        document.getElementById('polyline_an_inter_47_46_b').style.display = 'none';            
        document.getElementById('polyline_mg_inter_47_46_b').style.display = 'none';            
        
        document.getElementById('polygon_inter_47_46_l').style.display = 'none';            
        document.getElementById('polyline_an_inter_47_46_l').style.display = 'none';            
        document.getElementById('polyline_mg_inter_47_46_l').style.display = 'none';            
        
        document.getElementById('polygon_inter_46_45_b').style.display = 'none';            
        document.getElementById('polyline_an_inter_46_45_b').style.display = 'none';            
        document.getElementById('polyline_mg_inter_46_45_b').style.display = 'none';            
        
        document.getElementById('polygon_inter_46_45_l').style.display = 'none';            
        document.getElementById('polyline_an_inter_46_45_l').style.display = 'none';            
        document.getElementById('polyline_mg_inter_46_45_l').style.display = 'none';            
        
        document.getElementById('note_46_txt').style.display = 'none';
    }
    else if (Implant_46 !== 1) {
        Tooth_46 = 1;
        document.getElementById('tooth_line_46_b').style.display = 'none';
        document.getElementById('tooth_line_46_l').style.display = 'none';

        document.getElementById('mobility_46_txt').style.display = 'block';

        document.getElementById('implant_46_btn').style.display = 'block';

        document.getElementById('furcation_46_b_btn').style.display = 'block';
        document.getElementById('furcation_46_l_btn').style.display = 'block';
        
        document.getElementById('mg_46_db_txt').style.display = 'block';
        document.getElementById('mg_46_b_txt').style.display = 'block';
        document.getElementById('mg_46_mb_txt').style.display = 'block';
        
        document.getElementById('st_46_db_txt').style.display = 'block';
        document.getElementById('st_46_b_txt').style.display = 'block';
        document.getElementById('st_46_mb_txt').style.display = 'block';
        
        document.getElementById('mg_46_dl_txt').style.display = 'block';
        document.getElementById('mg_46_l_txt').style.display = 'block';
        document.getElementById('mg_46_ml_txt').style.display = 'block';
        
        document.getElementById('st_46_dl_txt').style.display = 'block';
        document.getElementById('st_46_l_txt').style.display = 'block';
        document.getElementById('st_46_ml_txt').style.display = 'block';
        
        document.getElementById('note_46_txt').style.display = 'block';

        document.getElementById('polygon_46_b').style.display = 'block';
        document.getElementById('polyline_an_46_b').style.display = 'block';
        document.getElementById('polyline_mg_46_b').style.display = 'block';
        
        document.getElementById('polygon_46_l').style.display = 'block';
        document.getElementById('polyline_an_46_l').style.display = 'block';
        document.getElementById('polyline_mg_46_l').style.display = 'block';

        if (Tooth_47 == 1 && Tooth_46 == 1) {
            document.getElementById('polygon_inter_47_46_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_47_46_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_47_46_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_47_46_l').style.display = 'block';            
            document.getElementById('polyline_an_inter_47_46_l').style.display = 'block';            
            document.getElementById('polyline_mg_inter_47_46_l').style.display = 'block';            
        }
        
        if (Tooth_46 == 1 && Tooth_45 == 1) {
            document.getElementById('polygon_inter_46_45_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_46_45_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_46_45_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_46_45_l').style.display = 'block';            
            document.getElementById('polyline_an_inter_46_45_l').style.display = 'block';            
            document.getElementById('polyline_mg_inter_46_45_l').style.display = 'block';            
        }

        if (Furcation_46_b == 1) {
            document.getElementById('furcation_1_46_b').style.display = 'block';
        } else if (Furcation_46_b == 2) {
            document.getElementById('furcation_2_46_b').style.display = 'block';
        } else if (Furcation_46_b == 3) {
            document.getElementById('furcation_3_46_b').style.display = 'block';
        }
        if (Furcation_46_b == 1) {
            document.getElementById('furcation_1_46_b_tab').style.display = 'block';
        } else if (Furcation_46_b == 2) {
            document.getElementById('furcation_2_46_b_tab').style.display = 'block';
        } else if (Furcation_46_b == 3) {
            document.getElementById('furcation_3_46_b_tab').style.display = 'block';
        }
        if (Furcation_46_l == 1) {
            document.getElementById('furcation_1_46_l').style.display = 'block';
        } else if (Furcation_46_l == 2) {
            document.getElementById('furcation_2_46_l').style.display = 'block';
        } else if (Furcation_46_l == 3) {
            document.getElementById('furcation_3_46_l').style.display = 'block';
        }
        if (Furcation_46_l == 1) {
            document.getElementById('furcation_1_46_l_tab').style.display = 'block';
        } else if (Furcation_46_l == 2) {
            document.getElementById('furcation_2_46_l_tab').style.display = 'block';
        } else if (Furcation_46_l == 3) {
            document.getElementById('furcation_3_46_l_tab').style.display = 'block';
        }

        document.getElementById('BOP_46_db_btn').style.display = 'block';
        document.getElementById('BOP_46_b_btn').style.display = 'block';
        document.getElementById('BOP_46_mb_btn').style.display = 'block';

        document.getElementById('BOP_46_dl_btn').style.display = 'block';
        document.getElementById('BOP_46_l_btn').style.display = 'block';
        document.getElementById('BOP_46_ml_btn').style.display = 'block';
        
        if (BOP_46_db == 1) {
            document.getElementById('BOP_46_db_rectangle').style.display = 'block';
        }
        if (BOP_46_b == 1) {
            document.getElementById('BOP_46_b_rectangle').style.display = 'block';
        }
        if (BOP_46_mb == 1) {
            document.getElementById('BOP_46_mb_rectangle').style.display = 'block';
        }
        if (BOP_46_dl == 1) {
            document.getElementById('BOP_46_dl_rectangle').style.display = 'block';
        }
        if (BOP_46_l == 1) {
            document.getElementById('BOP_46_l_rectangle').style.display = 'block';
        }
        if (BOP_46_ml == 1) {
            document.getElementById('BOP_46_ml_rectangle').style.display = 'block';
        }
        
        document.getElementById('PI_46_db_btn').style.display = 'block';
        document.getElementById('PI_46_b_btn').style.display = 'block';
        document.getElementById('PI_46_mb_btn').style.display = 'block';

        document.getElementById('PI_46_dl_btn').style.display = 'block';
        document.getElementById('PI_46_l_btn').style.display = 'block';
        document.getElementById('PI_46_ml_btn').style.display = 'block';
        
        if (PI_46_db == 1) {
            document.getElementById('PI_46_db_rectangle').style.display = 'block';
        }
        if (PI_46_b == 1) {
            document.getElementById('PI_46_b_rectangle').style.display = 'block';
        }
        if (PI_46_mb == 1) {
            document.getElementById('PI_46_mb_rectangle').style.display = 'block';
        }
        if (PI_46_dl == 1) {
            document.getElementById('PI_46_dl_rectangle').style.display = 'block';
        }
        if (PI_46_l == 1) {
            document.getElementById('PI_46_l_rectangle').style.display = 'block';
        }
        if (PI_46_ml == 1) {
            document.getElementById('PI_46_ml_rectangle').style.display = 'block';
        }
    }		
    else if (Implant_46 == 1) {
        Tooth_46 = 1;
        document.getElementById('tooth_line_46_b').style.display = 'none';
        document.getElementById('tooth_line_46_l').style.display = 'none';

        document.getElementById('mobility_46_txt').style.display = 'block';
        
        document.getElementById('note_46_txt').style.display = 'block';

        document.getElementById('implant_46_btn').style.display = 'block';
        document.getElementById('implant_46_tab').style.display = 'block';
        document.getElementById('implant_46_b_image').style.display = 'block';
        document.getElementById('implant_46_l_image').style.display = 'block';

        document.getElementById('mg_46_db_txt').style.display = 'block';
        document.getElementById('mg_46_b_txt').style.display = 'block';
        document.getElementById('mg_46_mb_txt').style.display = 'block';
        
        document.getElementById('st_46_db_txt').style.display = 'block';
        document.getElementById('st_46_b_txt').style.display = 'block';
        document.getElementById('st_46_mb_txt').style.display = 'block';
        
        document.getElementById('mg_46_dl_txt').style.display = 'block';
        document.getElementById('mg_46_l_txt').style.display = 'block';
        document.getElementById('mg_46_ml_txt').style.display = 'block';
        
        document.getElementById('st_46_dl_txt').style.display = 'block';
        document.getElementById('st_46_l_txt').style.display = 'block';
        document.getElementById('st_46_ml_txt').style.display = 'block';

        document.getElementById('polygon_46_b').style.display = 'block';
        document.getElementById('polyline_an_46_b').style.display = 'block';
        document.getElementById('polyline_mg_46_b').style.display = 'block';
        
        document.getElementById('polygon_46_l').style.display = 'block';
        document.getElementById('polyline_an_46_l').style.display = 'block';
        document.getElementById('polyline_mg_46_l').style.display = 'block';

        if (Tooth_47 == 1 && Tooth_46 == 1) {
            document.getElementById('polygon_inter_47_46_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_47_46_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_47_46_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_47_46_l').style.display = 'block';            
            document.getElementById('polyline_an_inter_47_46_l').style.display = 'block';            
            document.getElementById('polyline_mg_inter_47_46_l').style.display = 'block';            
        }
        
        if (Tooth_46 == 1 && Tooth_45 == 1) {
            document.getElementById('polygon_inter_46_45_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_46_45_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_46_45_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_46_45_l').style.display = 'block';            
            document.getElementById('polyline_an_inter_46_45_l').style.display = 'block';            
            document.getElementById('polyline_mg_inter_46_45_l').style.display = 'block';            
        }

        document.getElementById('BOP_46_db_btn').style.display = 'block';
        document.getElementById('BOP_46_b_btn').style.display = 'block';
        document.getElementById('BOP_46_mb_btn').style.display = 'block';

        document.getElementById('BOP_46_dl_btn').style.display = 'block';
        document.getElementById('BOP_46_l_btn').style.display = 'block';
        document.getElementById('BOP_46_ml_btn').style.display = 'block';
        
        document.getElementById('PI_46_db_btn').style.display = 'block';
        document.getElementById('PI_46_b_btn').style.display = 'block';
        document.getElementById('PI_46_mb_btn').style.display = 'block';

        document.getElementById('PI_46_dl_btn').style.display = 'block';
        document.getElementById('PI_46_l_btn').style.display = 'block';
        document.getElementById('PI_46_ml_btn').style.display = 'block';
        
        if (BOP_46_db == 1) {
            document.getElementById('BOP_46_db_rectangle').style.display = 'block';
        }
        if (BOP_46_b == 1) {
            document.getElementById('BOP_46_b_rectangle').style.display = 'block';
        }
        if (BOP_46_mb == 1) {
            document.getElementById('BOP_46_mb_rectangle').style.display = 'block';
        }
        if (BOP_46_dl == 1) {
            document.getElementById('BOP_46_dl_rectangle').style.display = 'block';
        }
        if (BOP_46_l == 1) {
            document.getElementById('BOP_46_l_rectangle').style.display = 'block';
        }
        if (BOP_46_ml == 1) {
            document.getElementById('BOP_46_ml_rectangle').style.display = 'block';
        }
        
        if (PI_46_db == 1) {
            document.getElementById('PI_46_db_rectangle').style.display = 'block';
        }
        if (PI_46_b == 1) {
            document.getElementById('PI_46_b_rectangle').style.display = 'block';
        }
        if (PI_46_mb == 1) {
            document.getElementById('PI_46_mb_rectangle').style.display = 'block';
        }
        if (PI_46_dl == 1) {
            document.getElementById('PI_46_dl_rectangle').style.display = 'block';
        }
        if (PI_46_l == 1) {
            document.getElementById('PI_46_l_rectangle').style.display = 'block';
        }
        if (PI_46_ml == 1) {
            document.getElementById('PI_46_ml_rectangle').style.display = 'block';
        }
    }
}

function toggle_implant_46() {
    if (Implant_46 == 0) {
        Implant_46 = 1;
        
        document.getElementById('implant_46_b_image').style.display = 'block';
        document.getElementById('implant_46_l_image').style.display = 'block';
        document.getElementById('implant_46_tab').style.display = 'block';
        
        document.getElementById('furcation_46_b_btn').style.display = 'none';
        document.getElementById('furcation_46_l_btn').style.display = 'none';
        
        document.getElementById('furcation_1_46_b').style.display = 'none';
        document.getElementById('furcation_2_46_b').style.display = 'none';
        document.getElementById('furcation_3_46_b').style.display = 'none';
        
        document.getElementById('furcation_1_46_b_tab').style.display = 'none';
        document.getElementById('furcation_2_46_b_tab').style.display = 'none';
        document.getElementById('furcation_3_46_b_tab').style.display = 'none';
        
        document.getElementById('furcation_1_46_l').style.display = 'none';
        document.getElementById('furcation_2_46_l').style.display = 'none';
        document.getElementById('furcation_3_46_l').style.display = 'none';
        
        document.getElementById('furcation_1_46_l_tab').style.display = 'none';
        document.getElementById('furcation_2_46_l_tab').style.display = 'none';
        document.getElementById('furcation_3_46_l_tab').style.display = 'none';
    }
    else {
        Implant_46 = 0;
        
        document.getElementById('implant_46_b_image').style.display = 'none';
        document.getElementById('implant_46_l_image').style.display = 'none';
        document.getElementById('implant_46_tab').style.display = 'none';
        
        document.getElementById('furcation_46_b_btn').style.display = 'block';
        document.getElementById('furcation_46_l_btn').style.display = 'block';

        if (Furcation_46_b == 1) {
            document.getElementById('furcation_1_46_b').style.display = 'block';
        } else if (Furcation_46_b == 2) {
            document.getElementById('furcation_2_46_b').style.display = 'block';
        } else if (Furcation_46_b == 3) {
            document.getElementById('furcation_3_46_b').style.display = 'block';
        }
        if (Furcation_46_b == 1) {
            document.getElementById('furcation_1_46_b_tab').style.display = 'block';
        } else if (Furcation_46_b == 2) {
            document.getElementById('furcation_2_46_b_tab').style.display = 'block';
        } else if (Furcation_46_b == 3) {
            document.getElementById('furcation_3_46_b_tab').style.display = 'block';
        }
        if (Furcation_46_l == 1) {
            document.getElementById('furcation_1_46_l').style.display = 'block';
        } else if (Furcation_46_l == 2) {
            document.getElementById('furcation_2_46_l').style.display = 'block';
        } else if (Furcation_46_l == 3) {
            document.getElementById('furcation_3_46_l').style.display = 'block';
        }
        if (Furcation_46_l == 1) {
            document.getElementById('furcation_1_46_l_tab').style.display = 'block';
        } else if (Furcation_46_l == 2) {
            document.getElementById('furcation_2_46_l_tab').style.display = 'block';
        } else if (Furcation_46_l == 3) {
            document.getElementById('furcation_3_46_l_tab').style.display = 'block';
        }
    }
}

function toggle_furcation_46_b() {
    if (Furcation_46_b == 0) {
        document.getElementById('furcation_1_46_b_tab').style.display = 'block';
        document.getElementById('furcation_2_46_b_tab').style.display = 'none';
        document.getElementById('furcation_3_46_b_tab').style.display = 'none';
        
        document.getElementById('furcation_1_46_b').style.display = 'block';
        document.getElementById('furcation_2_46_b').style.display = 'none';
        document.getElementById('furcation_3_46_b').style.display = 'none';

        Furcation_46_b = 1;
    }
    else if (Furcation_46_b == 1) {
        document.getElementById('furcation_1_46_b_tab').style.display = 'none';
        document.getElementById('furcation_2_46_b_tab').style.display = 'block';
        document.getElementById('furcation_3_46_b_tab').style.display = 'none';
        
        document.getElementById('furcation_1_46_b').style.display = 'none';
        document.getElementById('furcation_2_46_b').style.display = 'block';
        document.getElementById('furcation_3_46_b').style.display = 'none';
        
        Furcation_46_b = 2;
    }
    else if (Furcation_46_b == 2) {
        document.getElementById('furcation_1_46_b_tab').style.display = 'none';
        document.getElementById('furcation_2_46_b_tab').style.display = 'none';
        document.getElementById('furcation_3_46_b_tab').style.display = 'block';
        
        document.getElementById('furcation_1_46_b').style.display = 'none';
        document.getElementById('furcation_2_46_b').style.display = 'none';
        document.getElementById('furcation_3_46_b').style.display = 'block';
                    
        Furcation_46_b = 3;
    }
    else if (Furcation_46_b == 3) {
        document.getElementById('furcation_1_46_b_tab').style.display = 'none';
        document.getElementById('furcation_2_46_b_tab').style.display = 'none';
        document.getElementById('furcation_3_46_b_tab').style.display = 'none';
        
        document.getElementById('furcation_1_46_b').style.display = 'none';
        document.getElementById('furcation_2_46_b').style.display = 'none';
        document.getElementById('furcation_3_46_b').style.display = 'none';
                    
        Furcation_46_b = 0;
    }
}

function toggle_furcation_46_l() {
    if (Furcation_46_l == 0) {
        document.getElementById('furcation_1_46_l_tab').style.display = 'block';
        document.getElementById('furcation_2_46_l_tab').style.display = 'none';
        document.getElementById('furcation_3_46_l_tab').style.display = 'none';
        
        document.getElementById('furcation_1_46_l').style.display = 'block';
        document.getElementById('furcation_2_46_l').style.display = 'none';
        document.getElementById('furcation_3_46_l').style.display = 'none';

        Furcation_46_l = 1;
    }
    else if (Furcation_46_l == 1) {
        document.getElementById('furcation_1_46_l_tab').style.display = 'none';
        document.getElementById('furcation_2_46_l_tab').style.display = 'block';
        document.getElementById('furcation_3_46_l_tab').style.display = 'none';
        
        document.getElementById('furcation_1_46_l').style.display = 'none';
        document.getElementById('furcation_2_46_l').style.display = 'block';
        document.getElementById('furcation_3_46_l').style.display = 'none';
        
        Furcation_46_l = 2;
    }
    else if (Furcation_46_l == 2) {
        document.getElementById('furcation_1_46_l_tab').style.display = 'none';
        document.getElementById('furcation_2_46_l_tab').style.display = 'none';
        document.getElementById('furcation_3_46_l_tab').style.display = 'block';
        
        document.getElementById('furcation_1_46_l').style.display = 'none';
        document.getElementById('furcation_2_46_l').style.display = 'none';
        document.getElementById('furcation_3_46_l').style.display = 'block';
                    
        Furcation_46_l = 3;
    }
    else if (Furcation_46_l == 3) {
        document.getElementById('furcation_1_46_l_tab').style.display = 'none';
        document.getElementById('furcation_2_46_l_tab').style.display = 'none';
        document.getElementById('furcation_3_46_l_tab').style.display = 'none';
        
        document.getElementById('furcation_1_46_l').style.display = 'none';
        document.getElementById('furcation_2_46_l').style.display = 'none';
        document.getElementById('furcation_3_46_l').style.display = 'none';
                    
        Furcation_46_l = 0;
    }
}

function toggle_BOP_46_db() {
    if (BOP_46_db == 0) {
        BOP_46_db = 1;
        document.getElementById('BOP_46_db_rectangle').style.display = 'block';
    }
    else {
        BOP_46_db = 0;
        document.getElementById('BOP_46_db_rectangle').style.display = 'none';
    }
}

function toggle_BOP_46_b() {
    if (BOP_46_b == 0) {
        BOP_46_b = 1;
        document.getElementById('BOP_46_b_rectangle').style.display = 'block';
    }
    else {
        BOP_46_b = 0;
        document.getElementById('BOP_46_b_rectangle').style.display = 'none';
    }
}

function toggle_BOP_46_mb() {
    if (BOP_46_mb == 0) {
        BOP_46_mb = 1;
        document.getElementById('BOP_46_mb_rectangle').style.display = 'block';
    }
    else {
        BOP_46_mb = 0;
        document.getElementById('BOP_46_mb_rectangle').style.display = 'none';
    }
}

function toggle_PI_46_db() {
    if (PI_46_db == 0) {
        PI_46_db = 1;
        document.getElementById('PI_46_db_rectangle').style.display = 'block';
    }
    else {
        PI_46_db = 0;
        document.getElementById('PI_46_db_rectangle').style.display = 'none';
    }
}

function toggle_PI_46_b() {
    if (PI_46_b == 0) {
        PI_46_b = 1;
        document.getElementById('PI_46_b_rectangle').style.display = 'block';
    }
    else {
        PI_46_b = 0;
        document.getElementById('PI_46_b_rectangle').style.display = 'none';
    }
}

function toggle_PI_46_mb() {
    if (PI_46_mb == 0) {
        PI_46_mb = 1;
        document.getElementById('PI_46_mb_rectangle').style.display = 'block';
    }
    else {
        PI_46_mb = 0;
        document.getElementById('PI_46_mb_rectangle').style.display = 'none';
    }
}

function toggle_BOP_46_dl() {
    if (BOP_46_dl == 0) {
        BOP_46_dl = 1;
        document.getElementById('BOP_46_dl_rectangle').style.display = 'block';
    }
    else {
        BOP_46_dl = 0;
        document.getElementById('BOP_46_dl_rectangle').style.display = 'none';
    }
}

function toggle_BOP_46_l() {
    if (BOP_46_l == 0) {
        BOP_46_l = 1;
        document.getElementById('BOP_46_l_rectangle').style.display = 'block';
    }
    else {
        BOP_46_l = 0;
        document.getElementById('BOP_46_l_rectangle').style.display = 'none';
    }
}

function toggle_BOP_46_ml() {
    if (BOP_46_ml == 0) {
        BOP_46_ml = 1;
        document.getElementById('BOP_46_ml_rectangle').style.display = 'block';
    }
    else {
        BOP_46_ml = 0;
        document.getElementById('BOP_46_ml_rectangle').style.display = 'none';
    }
}

function toggle_PI_46_dl() {
    if (PI_46_dl == 0) {
        PI_46_dl = 1;
        document.getElementById('PI_46_dl_rectangle').style.display = 'block';
    }
    else {
        PI_46_dl = 0;
        document.getElementById('PI_46_dl_rectangle').style.display = 'none';
    }
}

function toggle_PI_46_l() {
    if (PI_46_l == 0) {
        PI_46_l = 1;
        document.getElementById('PI_46_l_rectangle').style.display = 'block';
    }
    else {
        PI_46_l = 0;
        document.getElementById('PI_46_l_rectangle').style.display = 'none';
    }
}

function toggle_PI_46_ml() {
    if (PI_46_ml == 0) {
        PI_46_ml = 1;
        document.getElementById('PI_46_ml_rectangle').style.display = 'block';
    }
    else {
        PI_46_ml = 0;
        document.getElementById('PI_46_ml_rectangle').style.display = 'none';
    }
}

function change_probing_46() {
    if (Tooth_46 == 1) {
        
    // Variablen aus dem Formular
        st_46_db = document.forms[0]["st_46_db"].value;
        st_46_b = document.forms[0]["st_46_b"].value;
        st_46_mb = document.forms[0]["st_46_mb"].value;

        if (document.forms[0]["st_46_dl"].value > 3) {document.forms[0]["st_46_dl"].style.color = 'red';} else {document.forms[0]["st_46_dl"].style.color = 'black'};
        if (document.forms[0]["st_46_l"].value > 3) {document.forms[0]["st_46_l"].style.color = 'red';} else {document.forms[0]["st_46_l"].style.color = 'black'};
        if (document.forms[0]["st_46_ml"].value > 3) {document.forms[0]["st_46_ml"].style.color = 'red';} else {document.forms[0]["st_46_ml"].style.color = 'black'};
        
        mg_46_db = document.forms[0]["mg_46_db"].value;
        mg_46_b = document.forms[0]["mg_46_b"].value;
        mg_46_mb = document.forms[0]["mg_46_mb"].value;
        
        st_46_dl = document.forms[0]["st_46_dl"].value;
        st_46_l = document.forms[0]["st_46_l"].value;
        st_46_ml = document.forms[0]["st_46_ml"].value;

        if (document.forms[0]["st_46_db"].value > 3) {document.forms[0]["st_46_db"].style.color = 'red';} else {document.forms[0]["st_46_db"].style.color = 'black'};
        if (document.forms[0]["st_46_b"].value > 3) {document.forms[0]["st_46_b"].style.color = 'red';} else {document.forms[0]["st_46_b"].style.color = 'black'};
        if (document.forms[0]["st_46_mb"].value > 3) {document.forms[0]["st_46_mb"].style.color = 'red';} else {document.forms[0]["st_46_mb"].style.color = 'black'};
        
        mg_46_dl = document.forms[0]["mg_46_dl"].value;
        mg_46_l = document.forms[0]["mg_46_l"].value;
        mg_46_ml = document.forms[0]["mg_46_ml"].value;

    // Set der horizontalen Koordinaten von Zahn 46 (bukkal) in der Bitmap
        var x_db_46 = 422;							// distal 46
        var x_mb_46 = 469;							// mesial 46
        var x_b_46 = (x_db_46 + x_mb_46)/2;			// bukkal 46
        
    // Set der horizontalen Koordinaten von Zahn 46 (lingual) in der Bitmap
        var x_dl_46 = 425;							// distal 46
        var x_ml_46 = 469;							// mesial 46
        var x_l_46 = (x_dl_46 + x_ml_46)/2;			// lingual 46
        
    // Set der vertikalen Koordinaten von Zahn 46 (bukkal) aus dem Formular
        var y_mg_46_db = mg_UK_b - 6.05 * mg_46_db;	// Margo Gingivae distobukkal 46
        var y_mg_46_b = mg_UK_b - 6.05 * mg_46_b;	// Margo Gingivae bukkal 46
        var y_mg_46_mb = mg_UK_b - 6.05 * mg_46_mb;	// Margo Gingivae mesiobukkal 46
        var y_st_46_db = 6.05 * st_46_db;			// Sondierungstiefe distobukkal 46
        var y_st_46_b = 6.05 * st_46_b;				// Sondierungstiefe bukkal 46
        var y_st_46_mb = 6.05 * st_46_mb;			// Sondierungstiefe mesiobukkal 46
        
    // Set der vertikalen Koordinaten von Zahn 46 (lingual) aus dem Formular
        var y_mg_46_dl = mg_UK_l + 6.05 * mg_46_dl;	// Margo Gingivae distolingual 46
        var y_mg_46_l = mg_UK_l + 6.05 * mg_46_l;	// Margo Gingivae lingual 46
        var y_mg_46_ml = mg_UK_l + 6.05 * mg_46_ml;	// Margo Gingivae mesiolingual 46
        var y_st_46_dl = 6.05 * st_46_dl;			// Sondierungstiefe distolingual 46
        var y_st_46_l = 6.05 * st_46_l;				// Sondierungstiefe lingual 46
        var y_st_46_ml = 6.05 * st_46_ml;			// Sondierungstiefe mesiolingual 46
        
    // Berechnung des Attachmentniveaus 46 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_46_db = y_mg_46_db + y_st_46_db;	// Attachmentniveau distobukkal 46
        var y_an_46_b = y_mg_46_b + y_st_46_b;		// Attachmentniveau bukkal 46
        var y_an_46_mb = y_mg_46_mb + y_st_46_mb;	// Attachmentniveau mesiobukkal 46
        
    // Berechnung des Attachmentniveaus 46 (lingual) aus Margo Gingivae und Sondierungstiefe
        var y_an_46_dl = y_mg_46_dl - y_st_46_dl;	// Attachmentniveau distolingual 46
        var y_an_46_l = y_mg_46_l - y_st_46_l;		// Attachmentniveau lingual 46
        var y_an_46_ml = y_mg_46_ml - y_st_46_ml;	// Attachmentniveau mesiolingual 46
        
    // Parodontaltasche 46 bukkal zeichnen
        var string = 
            x_db_46 + ", " + y_an_46_db + "  " + 
            x_b_46 + ", " + y_an_46_b + "  " + 
            x_mb_46 + ", " + y_an_46_mb + "  " + 
            x_mb_46 + ", " + y_mg_46_mb + "  " + 
            x_b_46 + ", " + y_mg_46_b + "  " + 
            x_db_46 + ", " + y_mg_46_db;
        document.getElementById("polygon_46_b").setAttribute("points", string);
    // Attachmentniveau 46 bukkal zeichnen
        var string = 
            x_db_46 + ", " + y_an_46_db + "  " + 
            x_b_46 + ", " + y_an_46_b + "  " + 
            x_mb_46 + ", " + y_an_46_mb;
        document.getElementById("polyline_an_46_b").setAttribute("points", string);
    // Margo Gingivae 46 bukkal zeichnen
        var string =
            x_db_46 + ", " + y_mg_46_db + "  " + 
            x_b_46 + ", " + y_mg_46_b + "  " + 
            x_mb_46 + ", " + y_mg_46_mb;
        document.getElementById("polyline_mg_46_b").setAttribute("points", string);

    // Parodontaltasche 46 lingual zeichnen
        var string = 
            x_dl_46 + ", " + y_an_46_dl + "  " + 
            x_l_46 + ", " + y_an_46_l + "  " + 
            x_ml_46 + ", " + y_an_46_ml + "  " + 
            x_ml_46 + ", " + y_mg_46_ml + "  " + 
            x_l_46 + ", " + y_mg_46_l + "  " + 
            x_dl_46 + ", " + y_mg_46_dl;
        document.getElementById("polygon_46_l").setAttribute("points", string);
    // Attachmentniveau 46 lingual zeichnen
        var string = 
            x_dl_46 + ", " + y_an_46_dl + "  " + 
            x_l_46 + ", " + y_an_46_l + "  " + 
            x_ml_46 + ", " + y_an_46_ml;
        document.getElementById("polyline_an_46_l").setAttribute("points", string);
    // Margo Gingivae 46 lingual zeichnen
        var string =
            x_dl_46 + ", " + y_mg_46_dl + "  " + 
            x_l_46 + ", " + y_mg_46_l + "  " + 
            x_ml_46 + ", " + y_mg_46_ml;
        document.getElementById("polyline_mg_46_l").setAttribute("points", string);
    }
    if (Tooth_46 == 1 && Tooth_45 == 1) {

        st_45_db = document.forms[0]["st_45_db"].value;
        mg_45_db = document.forms[0]["mg_45_db"].value;
        
        st_45_dl = document.forms[0]["st_45_dl"].value;
        mg_45_dl = document.forms[0]["mg_45_dl"].value;
        
    // Set der horizontalen Koordinaten von Zahn 45 (bukkal) in der Bitmap
        var x_db_45 = 492;							// distal 45
        
    // Set der horizontalen Koordinaten von Zahn 45 (lingual) in der Bitmap
        var x_dl_45 = 489;							// distal 45
        
    // Set der vertikalen Koordinaten von Zahn 45 (bukkal) aus dem Formular
        var y_mg_45_db = mg_UK_b - 6.05 * mg_45_db;	// Margo Gingivae distobukkal 45
        var y_st_45_db = 6.05 * st_45_db;			// Sondierungstiefe distobukkal 45
        
    // Set der vertikalen Koordinaten von Zahn 45 (lingual) aus dem Formular
        var y_mg_45_dl = mg_UK_l + 6.05 * mg_45_dl;	// Margo Gingivae distolingual 45
        var y_st_45_dl = 6.05 * st_45_dl;			// Sondierungstiefe distolingual 45
        
    // Berechnung des Attachmentniveaus 45 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_45_db = y_mg_45_db + y_st_45_db;	// Attachmentniveau distobukkal 45
        
    // Berechnung des Attachmentniveaus 45 (lingual) aus Margo Gingivae und Sondierungstiefe
        var y_an_45_dl = y_mg_45_dl - y_st_45_dl;	// Attachmentniveau distolingual 45

    // Parodontaltasche inter_46_45 bukkal zeichnen
        var string = 
            x_mb_46 + ", " + y_an_46_mb + "  " + 
            x_db_45 + ", " + y_an_45_db + "  " + 
            x_db_45 + ", " + y_mg_45_db + "  " + 
            x_mb_46 + ", " + y_mg_46_mb;
        document.getElementById("polygon_inter_46_45_b").setAttribute("points", string);
    // Attachmentniveau inter_46_45 bukkal zeichnen
        var string = 
            x_mb_46 + ", " + y_an_46_mb + "  " + 
            x_db_45 + ", " + y_an_45_db;
        document.getElementById("polyline_an_inter_46_45_b").setAttribute("points", string);
    // Margo Gingivae inter_46_45 bukkal zeichnen
        var string =
            x_mb_46 + ", " + y_mg_46_mb + "  " + 
            x_db_45 + ", " + y_mg_45_db;
        document.getElementById("polyline_mg_inter_46_45_b").setAttribute("points", string);

    // Parodontaltasche inter_46_45 lingual zeichnen
        var string = 
            x_ml_46 + ", " + y_an_46_ml + "  " + 
            x_dl_45 + ", " + y_an_45_dl + "  " + 
            x_dl_45 + ", " + y_mg_45_dl + "  " + 
            x_ml_46 + ", " + y_mg_46_ml;
        document.getElementById("polygon_inter_46_45_l").setAttribute("points", string);
    // Attachmentniveau inter_46_45 lingual zeichnen
        var string = 
            x_ml_46 + ", " + y_an_46_ml + "  " + 
            x_dl_45 + ", " + y_an_45_dl;
        document.getElementById("polyline_an_inter_46_45_l").setAttribute("points", string);
    // Margo Gingivae inter_46_45 lingual zeichnen
        var string =
            x_ml_46 + ", " + y_mg_46_ml + "  " + 
            x_dl_45 + ", " + y_mg_45_dl;
        document.getElementById("polyline_mg_inter_46_45_l").setAttribute("points", string);
    }
    if (Tooth_47 == 1 && Tooth_46 == 1) {

        st_47_mb = document.forms[0]["st_47_mb"].value;
        mg_47_mb = document.forms[0]["mg_47_mb"].value;
        
        st_47_ml = document.forms[0]["st_47_ml"].value;
        mg_47_ml = document.forms[0]["mg_47_ml"].value;
        
    // Set der horizontalen Koordinaten von Zahn 47 (bukkal) in der Bitmap
        var x_mb_47 = 406;							// mesial 47
        
    // Set der horizontalen Koordinaten von Zahn 47 (lingual) in der Bitmap
        var x_ml_47 = 410;							// mesial 47
        
    // Set der vertikalen Koordinaten von Zahn 47 (bukkal) aus dem Formular
        var y_mg_47_mb = mg_UK_b - 6.05 * mg_47_mb;	// Margo Gingivae mesiobukkal 47
        var y_st_47_mb = 6.05 * st_47_mb;			// Sondierungstiefe mesiobukkal 47
        
    // Set der vertikalen Koordinaten von Zahn 47 (lingual) aus dem Formular
        var y_mg_47_ml = mg_UK_l + 6.05 * mg_47_ml;	// Margo Gingivae mesiolingual 47
        var y_st_47_ml = 6.05 * st_47_ml;			// Sondierungstiefe mesiolingual 47
        
    // Berechnung des Attachmentniveaus 47 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_47_mb = y_mg_47_mb + y_st_47_mb;	// Attachmentniveau mesiobukkal 47
        
    // Berechnung des Attachmentniveaus 47 (lingual) aus Margo Gingivae und Sondierungstiefe
        var y_an_47_ml = y_mg_47_ml - y_st_47_ml;	// Attachmentniveau mesiolingual 47

    // Parodontaltasche inter_47_46 bukkal zeichnen
        var string = 
            x_mb_47 + ", " + y_an_47_mb + "  " + 
            x_db_46 + ", " + y_an_46_db + "  " + 
            x_db_46 + ", " + y_mg_46_db + "  " + 
            x_mb_47 + ", " + y_mg_47_mb;
        document.getElementById("polygon_inter_47_46_b").setAttribute("points", string);
    // Attachmentniveau inter_47_46 bukkal zeichnen
        var string = 
            x_mb_47 + ", " + y_an_47_mb + "  " + 
            x_db_46 + ", " + y_an_46_db;
        document.getElementById("polyline_an_inter_47_46_b").setAttribute("points", string);
    // Margo Gingivae inter_47_46 bukkal zeichnen
        var string =
            x_mb_47 + ", " + y_mg_47_mb + "  " + 
            x_db_46 + ", " + y_mg_46_db;
        document.getElementById("polyline_mg_inter_47_46_b").setAttribute("points", string);

    // Parodontaltasche inter_47_46 lingual zeichnen
        var string = 
            x_ml_47 + ", " + y_an_47_ml + "  " + 
            x_dl_46 + ", " + y_an_46_dl + "  " + 
            x_dl_46 + ", " + y_mg_46_dl + "  " + 
            x_ml_47 + ", " + y_mg_47_ml;
        document.getElementById("polygon_inter_47_46_l").setAttribute("points", string);
    // Attachmentniveau inter_47_46 lingual zeichnen
        var string = 
            x_ml_47 + ", " + y_an_47_ml + "  " + 
            x_dl_46 + ", " + y_an_46_dl;
        document.getElementById("polyline_an_inter_47_46_l").setAttribute("points", string);
    // Margo Gingivae inter_47_46 lingual zeichnen
        var string =
            x_ml_47 + ", " + y_mg_47_ml + "  " + 
            x_dl_46 + ", " + y_mg_46_dl;
        document.getElementById("polyline_mg_inter_47_46_l").setAttribute("points", string);
    }
}