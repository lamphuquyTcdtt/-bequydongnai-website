     function searchAndReplace(searchValue, replaceValue, type) {
            h5gg.clearResults();
            h5gg.searchNumber(searchValue, type, '0x100000000', '0x160000000');
            var results = h5gg.getResults(h5gg.getResultsCount());
            if (results.length === 0) {
                alert("Không tìm thấy kết quả phù hợp để thay đổi.");
            } else {
                for (var i = 0; i < results.length; i++) {
                    h5gg.setValue(results[i].address, replaceValue.toString(), type);
                }
                alert("✅ Mod By Tip Tip ✅");
            }
        }

        const emotes5 = [{
            value: "chao_bang",
            text: "Chảo băng"
        },
            {
                value: "ump_booyah",
                text: "UMP Booyah"
            },
            {
                value: "thompson_thoi_dai",
                text: "Thompson thời đại"
            },
            {
                value: "thomson_canhcut",
                text: "Thomson canhcut"
            },
            {
                value: "m1014_bom_no",
                text: "M1014 BOm nổ"
            },
            {
                value: "m4a1_tri_tue",
                text: "M4A1 trí tuệ"
            },
            {
                value: "M4A1_canh_cut_t",
                text: "M4a1 C.cụt Trắng"
            },
            {
                value: "M4A1_canh_cut_X",
                text: "M4a1 C.cụt Xann"
            },
            {
                value: "Mac10_Bang_tien",
                text: "Mac10 Băng tiên"
            },
            {
                value: "Thompson_C_cut",
                text: "Thompson C.cụt"
            },
            {
                value: "katana_huyet_nguyeth",
                text: "katana huyết nguyêth"
            },
            {
                value: "AC80_P_Xa",
                text: "AC80 P.Xà"
            },
            {
                value: "Ak_Samurai",
                text: "Ak Samurai"
            },
            {
                value: "AM_sac_to",
                text: "AM sắc tố"
            },
            {
                value: "Ak47_P_Xa",
                text: "Ak47 P.Xà"
            },
            {
                value: "An94_P_Xa",
                text: "An94 P.Xà"
            },
            {
                value: "AUG_P_Xa",
                text: "AUG P.Xà"
            },
            {
                value: "Awm_P_Xa",
                text: "Awm P.Xà"
            },
            {
                value: "CGK_P_Xa",
                text: "CGK P.Xà"
            },
            {
                value: "Desert_P_Xa",
                text: "Desert P.Xà"
            },
            {
                value: "Famas_P_Xa",
                text: "Famas P.Xà"
            },
            {
                value: "Farafal_P_Xa",
                text: "Farafal P.Xà"
            },
            {
                value: "G18_P_Xa",
                text: "G18 P.Xà"
            },
            {
                value: "G36_P_Xa",
                text: "G36 P.Xà"
            },
            {
                value: "Groza_P_Xa",
                text: "Groza P.Xà"
            },
            {
                value: "M1014_P_Xa",
                text: "M1014 P.Xà"
            },
            {
                value: "M14_P_Xa",
                text: "M14 P.Xà"
            },
            {
                value: "M1887_P_Xa",
                text: "M1887 P.Xà"
            },
            {
                value: "M1917_P_Xa",
                text: "M1917 P.Xà"
            },
            {
                value: "M4a1_P_Xa",
                text: "M4a1 P.Xà"
            },
            {
                value: "M500_P_Xa",
                text: "M500 P.Xà"
            },
            {
                value: "M60_P_Xa",
                text: "M60 P.Xà"
            },
            {
                value: "M82B_P_Xa",
                text: "M82B P.Xà"
            },
            {
                value: "Mac10_P_Xa",
                text: "Mac10 P.Xà"
            },
            {
                value: "Mag_7_P_Xa",
                text: "Mag 7 P.Xà"
            },
            {
                value: "MP5_P_Xa",
                text: "MP5 P.Xà"
            },
            {
                value: "Mp40_P_Xa",
                text: "Mp40 P.Xà"
            },
            {
                value: "P90_P_Xa",
                text: "P90 P.Xà"
            },
            {
                value: "PP90_P_Xa",
                text: "PP90 P.Xà"
            },
            {
                value: "Scar_P_Xa",
                text: "Scar P.Xà"
            },
            {
                value: "SkS_P_Xa",
                text: "SkS P.Xà"
            },
            {
                value: "Sung_sac_P_Xa",
                text: "Súng sạc P.Xà"
            },
            {
                value: "SVD_P_Xa",
                text: "SVD P.Xà"
            },
            {
                value: "Thomson_P_Xa",
                text: "Thomson P.Xà"
            },
            {
                value: "Trogon_P_Xa",
                text: "Trogon P.Xà"
            },
            {
                value: "UMP_P_Xa",
                text: "UMP P.Xà"
            },
            {
                value: "UZi_P_Xa",
                text: "UZi P.Xà"
            },
            {
                value: "Vector_P_Xa",
                text: "Vector P.Xà"
            },
            {
                value: "XM8_P_Xa",
                text: "XM8 P.Xà"
            }];

        const emotes6 = [{
            value: "AWM_than_luc",
            text: "AWM thần lực"
        },
            {
                value: "ac80_thien_yet",
                text: "AC80 Thiên yết"
            },
            {
                value: "ak_hon_the_than_ma",
                text: "AK Thần ma"
            },
            {
                value: "ak_rong",
                text: "AK Rồng Xanh"
            },
            {
                value: "an94_ac_quy",
                text: "AN94 Ác quỷ"
            },
            {
                value: "an94_chien_tranh_do",
                text: "AN94 CT Đỏ"
            },
            {
                value: "an94_chien_tranh_hong",
                text: "AN94 CT Hồng"
            },
            {
                value: "awm_hoa_banh",
                text: "AWM hoả băng"
            },
            {
                value: "chim_go_kien_manh_ho",
                text: "CGK Mãnh hổ"
            },
            {
                value: "clong_quyen",
                text: "C.long quyền"
            },
            {
                value: "desert_thi_nhan",
                text: "Desert Thi nhân"
            },
            {
                value: "Desert_Anh_Sang",
                text: "Desert Ánh Sáng"
            },
            {
                value: "famas_d_doa",
                text: "FAMAS Dạ xoa"
            },
            {
                value: "farafal_clong",
                text: "Farafal C.long"
            },
            {
                value: "g18_chinh_phuc",
                text: "G18 Chinh phục"
            },
            {
                value: "groza_sac_mau",
                text: "Groza Sắc màu"
            },
            {
                value: "hoa_bang_quyen",
                text: "Hoả băng quyền"
            },
            {
                value: "katana_hoa_lang",
                text: "Katana Hoả lang"
            },
            {
                value: "katana_than_ma",
                text: "Katana Thần ma"
            },
            {
                value: "kata_hon_the",
                text: "Kata hỗn thế"
            },
            {
                value: "long_chao_quyen",
                text: "Long chảo quyền"
            },
            {
                value: "m1014_hhoa",
                text: "M1014 H.hoả"
            },
            {
                value: "m1014_l_toc",
                text: "M1014 L tộc"
            },
            {
                value: "m1014_shiba",
                text: "M1014 Shiba"
            },
            {
                value: "m1887_hoa_no",
                text: "M1887 Hoả nộ"
            },
            {
                value: "m1887_thuy_no",
                text: "M1887 Thuỷ nộ"
            },
            {
                value: "m1887_vu_tru",
                text: "M1887 Vũ trụ"
            },
            {
                value: "M1887_Lu_khach",
                text: "M1887 Lữ khách"
            },
            {
                value: "m4a1_hoa_nguc",
                text: "M4A1 Hoả ngục"
            },
            {
                value: "M4A1_Binh_minh",
                text: "M4A1 Bình minh"
            },
            {
                value: "mp40_bich_vang",
                text: "MP40 Bích Vàng"
            },
            {
                value: "mp40_mxa",
                text: "MP40 M.xà"
            },
            {
                value: "mp40_tia_chop",
                text: "MP40 Tia chớp"
            },
            {
                value: "M60_linh_hoa",
                text: "M60 linh hoả"
            },
            {
                value: "mp5_thien_than",
                text: "MP5 Thiên thần"
            },
            {
                value: "mp5_tho_7_mau",
                text: "MP5 Thỏ 7 màu"
            },
            {
                value: "nam_dam_hon_mang",
                text: "Nắm đấm hỗn mang"
            },
            {
                value: "nam_dam_hx_tru",
                text: "Nắm đấm vũ trụ"
            },
            {
                value: "no_san_bien",
                text: "Nỏ săn biển"
            },
            {
                value: "scar_ca_map",
                text: "Scar cá mập"
            },
            {
                value: "scar_dang_cap_titan",
                text: "Scar Đẳng Cấp Titan"
            },
            {
                value: "scar_xich_than_ma",
                text: "Scar Xích thần ma"
            },
            {
                value: "thompson_hthach",
                text: "Thompson H.thạch"
            },
            {
                value: "thomson_canhcut",
                text: "Thomson canhcut"
            },
            {
                value: "ump_chim_ung",
                text: "UMP chim ưng"
            },
            {
                value: "ump_khung_long",
                text: "UMP khủng long"
            },
            {
                value: "ump_pcach",
                text: "UMP P.cách"
            },
            {
                value: "xm8_ga_hoang_hot",
                text: "XM8 Gà hoảng hốt"
            },
            {
                value: "xm8_loi_than",
                text: "XM8 Lôi thần"
            },
            {
                value: "xich_quyen",
                text: "Xích quyền"
            },
            {
                value: "ac80_tinh_van",
                text: "ac80 tinh vân"
            },
            {
                value: "mp40_giai_dieu",
                text: "mp40 giai điệu"
            },
            {
                value: "mag_7_xac_uop",
                text: "mag 7 xác ướp"
            },
            {
                value: "katana_hoa_lang",
                text: "katana hoả lang"
            },
            {
                value: "luoi_hai_hac_van",
                text: "lưỡi hái hắc vân"
            },
            {
                value: "thompson_bach_cuoc",
                text: "thompson bạch cước"
            },
            {
                value: "m1014_titan",
                text: "m1014 titan"
            },
            {
                value: "G36_quy_cot",
                text: "G36 quỷ cốt"
            },
            {
                value: "luoi_hai_than_ma",
                text: "lưỡi hái thần ma"
            },
            {
                value: "p90_huy_diet",
                text: "p90 huỷ diệt"
            },
            {
                value: "CBC_chet_choc",
                text: "CBC Chết chóc"
            },
            {
                value: "desert_1_4",
                text: "Desert 1/4"
            },
            {
                value: "katana_hoa_bang",
                text: "katana hoả băng"
            }];
        const actionToMod2Element = document.getElementById('actionToMod2');
        const modAction2Element = document.getElementById('modAction2');

        emotes5.forEach(emote => {
            const option = document.createElement('option');
            option.value = emote.value;
            option.textContent = emote.text;
            actionToMod2Element.appendChild(option);
        });

        emotes6.forEach(emote => {
            const option = document.createElement('option');
            option.value = emote.value;
            option.textContent = emote.text;
            modAction2Element.appendChild(option);
        });

        function showModOptions2() {
            const selectedValue = actionToMod2Element.value;
            alert('Selected action: ' + selectedValue);
        }
        function showModOptions2() {
            document.getElementById('actionChoice5').style.display = 'none';
            document.getElementById('actionChoice6').style.display = 'block';
        }
        function confirmAction2() {
            var actionToMod = document.getElementById('actionToMod2').value;
            var modAction = document.getElementById('modAction2').value;
            searchAndReplace(values[actionToMod], values[modAction], 'I32');
            values[actionToMod] = values[modAction];
            console.log('Updated values:', values);
        }
        function goBack2() {

            document.getElementById('actionChoice6').style.display = 'none';
            document.getElementById('actionChoice5').style.display = 'block';
        }

        const emotes3 = [{
            value: "ao_mac_dinh",
            text: "Áo mặc định"
        },
            {
                value: "ao_tinh_yeu",
                text: "Áo tình yêu"
            },
            {
                value: "ao_zipper_xam",
                text: "Áo zipper xám"
            },
            {
                value: "quan_tinh_yeu",
                text: "[👖]tình yêu"
            },
            {
                value: "quan_mac_dinh",
                text: "[👖]mặc định"
            },
            {
                value: "mu_tinh_yeu",
                text: "[👑] Tình yêu"
            },
            {
                value: "kinh_tinh_yeu",
                text: "[👓] tình yêu"
            },
            {
                value: "giay_tinh_yeu",
                text: "[👟]tình yêu"
            },
            {
                value: "giay_mac_dinh",
                text: "[👟]mặc định"
            }];

        const emotes4 = [{
            value: "bo_khung_long_zilla",
            text: "Siêu đạo Chích đỏ"
        },
            {
                value: "bo_dao_trich_do",
                text: "👙 đạo trích đỏ"
            },
            {
                value: "bo_dao_trich_tim",
                text: "👙 đạo trích tím"
            },
            {
                value: "bo_dao_trich_vang",
                text: "👙 đạo trích vàng"
            },
            {
                value: "bo_dao_trich_xanh",
                text: "👙 đạo trích xanh"
            },
            {
                value: "bo_dao_trich_xanh_la",
                text: "👙 đạo trích xanh lá"
            },
            {
                value: "bo_dao_trich_ma",
                text: "👙 Đạo trích ma"
            },
            {
                value: "bo_khung_long_cau_vong",
                text: "👙 khủng long cầu vòng"
            },
            {
                value: "bo_khung_long_gorilla",
                text: "👙 khủng long gorilla"
            },
            {
                value: "bo_khung_long_hoa_si",
                text: "👙 khủng long hoạ sĩ"
            },
            {
                value: "bo_khung_long_huong",
                text: "👙 khủng long hường"
            },
            {
                value: "bo_khung_long_minion",
                text: "👙 khủng long minion"
            },
            {
                value: "bo_khung_long_tim",
                text: "👙 khủng long tím"
            },
            {
                value: "bo_khung_long_xanh",
                text: "👙 khủng long xanh"
            },
            {
                value: "bo_nguoi_xep_hinh",
                text: "👙 người xếp hình"
            },
            {
                value: "bo_ninja_den",
                text: "👙 Ninja đen"
            },
            {
                value: "bo_ninja_trang",
                text: "👙 Ninja trắng"
            },
            {
                value: "bo_saitama",
                text: "👙 saitama"
            },
            {
                value: "ao_cb_c_long",
                text: "[🥋] CB C.Long"
            },
            {
                value: "ao_thich_khanh",
                text: "[🥋] Thích khánh"
            },
            {
                value: "ao_densho",
                text: "[🥋] Densho"
            },
            {
                value: "ao_duong_pho",
                text: "[🥋] đường phố"
            },
            {
                value: "ao_trai_nho_ngao",
                text: "[🥋] trai nhổ ngáo"
            },
            {
                value: "ao_ht_mua_2",
                text: "[🥋] HT mùa 2"
            },
            {
                value: "ao_who_your_oaooy",
                text: "[🥋] who your oaooy"
            },
            {
                value: "ao_vm_hoang_kim",
                text: "[🥋] VM hoàng kim"
            },
            {
                value: "ao_8_trang_duc",
                text: "[🥋] Số 8 trắng (đức)"
            },
            {
                value: "ao_10_agentina",
                text: "[🥋] Số 10 agentina"
            },
            {
                value: "ao_7_lam_vai_nhat",
                text: "[🥋] Số 7 lam vai nhạt"
            },
            {
                value: "ao_7_do_co_xanh_la",
                text: "[🥋] Số 7 đỏ cổ xanh lá"
            },
            {
                value: "ao_9_xanh_blue",
                text: "[🥋] Số 9 xanh blue"
            },
            {
                value: "quan_tho_db_do",
                text: "[👖]thỏ ĐB đỏ"
            },
            {
                value: "quan_lang_tu",
                text: "[👖]lãng tử"
            },
            {
                value: "quan_ke_soc",
                text: "[👖]kẻ sọc"
            },
            {
                value: "quan_ngo_ngao",
                text: "[👖]ngổ ngáo"
            },
            {
                value: "quan_tham_hiem",
                text: "[👖]thám hiểm"
            },
            {
                value: "quan_saitama",
                text: "[👖]saitama"
            },
            {
                value: "quan_thien_than",
                text: "[👖]thiên thần"
            },
            {
                value: "kinh_tho_db_do",
                text: "[👓] thỏ db đỏ"
            },
            {
                value: "kinh_mat_na_chien_than",
                text: "[👓] Mặt nạ Chiến thần"
            },
            {
                value: "kinh_mat_na_sung",
                text: "[👓] mặt nạ Sừng"
            },
            {
                value: "kinh_mat_na_bushido",
                text: "[👓] mặt nạ Bushido"
            },
            {
                value: "kinh_mat_na_ct_dung_nham",
                text: "[👓] Mặt nạ CT dung nham"
            },
            {
                value: "mu_lang_khach",
                text: "[👑] lãng khách"
            },
            {
                value: "mu_dau_tho_ac",
                text: "[👑] đầu thỏ ác"
            },
            {
                value: "mu_dau_ngo_ngao",
                text: "[👑] đầu ngổ ngáo"
            },
            {
                value: "giay_tho_db_do",
                text: "[👟]thỏ ĐB đỏ"
            },
            {
                value: "giay_saitama",
                text: "[👟]Saitama"
            }];

        const actionToMod3Element = document.getElementById('actionToMod3');
        const modAction3Element = document.getElementById('modAction3');

        emotes3.forEach(emote => {
            const option = document.createElement('option');
            option.value = emote.value;
            option.textContent = emote.text;
            actionToMod3Element.appendChild(option);
        });

        emotes4.forEach(emote => {
            const option = document.createElement('option');
            option.value = emote.value;
            option.textContent = emote.text;
            modAction3Element.appendChild(option);
        });

        function showModOptions3() {
            const selectedValue = actionToMod3Element.value;
            alert('Selected action: ' + selectedValue);
        }
        function showModOptions3() {
            document.getElementById('actionChoice7').style.display = 'none';
            document.getElementById('actionChoice8').style.display = 'block';
        }


        function confirmAction3() {
            var actionToMod = document.getElementById('actionToMod3').value;
            var modAction = document.getElementById('modAction3').value;
            searchAndReplace(values[actionToMod], values[modAction], 'I32');
            values[actionToMod] = values[modAction];
            console.log('Updated values:', values);
        }
        function goBack3() {

            document.getElementById('actionChoice8').style.display = 'none';
            document.getElementById('actionChoice7').style.display = 'block';
        }

        // hd bien hinh
        const emotes1 = [{
            value: "kochim",
            text: "Mod Ko hành động"
        },
            {
                value: "caccho",
                text: "Độc lang"
            },
            {
                value: "sieunhanxanh",
                text: "Rampage"
            },
            {
                value: "quyvcl",
                text: "hóa quỷ"
            },
            {
                value: "acvcl",
                text: "Ác nhân"
            },
            {
                value: "thanvcl",
                text: "Thần ma"
            },
            {
                value: "longvcl",
                text: "Hỏa Băng"
            }];

        const emotes2 = [{
            value: "caccho",
            text: "Độc lang"
        },
            {
                value: "sieunhanxanh",
                text: "Rampage"
            },
            {
                value: "quyvcl",
                text: "hóa quỷ"
            },
            {
                value: "acvcl",
                text: "Ác nhân"
            },
            {
                value: "thanvcl",
                text: "Thần ma"
            },
            {
                value: "longvcl",
                text: "Hỏa Băng"
            }];

        const actionToMod1Element = document.getElementById('actionToMod1');
        const modAction1Element = document.getElementById('modAction1');

        emotes1.forEach(emote => {
            const option = document.createElement('option');
            option.value = emote.value;
            option.textContent = emote.text;
            actionToMod1Element.appendChild(option);
        });

        emotes2.forEach(emote => {
            const option = document.createElement('option');
            option.value = emote.value;
            option.textContent = emote.text;
            modAction1Element.appendChild(option);
        });

        function showModOptions1() {
            const selectedValue = actionToMod1Element.value;
            alert('Selected action: ' + selectedValue);
        }
        function goBack1() {

            document.getElementById('actionChoice4').style.display = 'none';
            document.getElementById('actionChoice3').style.display = 'block';
        }
        function showModOptions1() {
            document.getElementById('actionChoice3').style.display = 'none';
            document.getElementById('actionChoice4').style.display = 'block';
        }
        function confirmAction1() {
            var actionToMod = document.getElementById('actionToMod1').value;
            var modAction = document.getElementById('modAction1').value;
            searchAndReplace(values[actionToMod], values[modAction], 'I32');
            values[actionToMod] = values[modAction];
            console.log('Updated values:', values);
        }

        // HD để Mod
        const emotes = [{
            value: "o_may_zing_got_chop",
            text: "ơ mây zing gót chóp"
        },
            {
                value: "chao",
                text: "Chào"
            },
            {
                value: "cuoi",
                text: "Cười"
            },
            {
                value: "khieu_khich",
                text: "Khiêu khích"
            },
            {
                value: "vo_tay",
                text: "Vỗ tay"
            },
            {
                value: "dab",
                text: "Dab"
            },
            {
                value: "ga",
                text: "Gà"
            },
            {
                value: "vay_tay",
                text: "Vẫy tay"
            },
            {
                value: "ban_nhay",
                text: "Bắn nhảy"
            },
            {
                value: "baby_shark",
                text: "Baby Shark"
            },
            {
                value: "tang_hoa",
                text: "Tặng hoa"
            },
            {
                value: "dieu_nhay_xac_uop",
                text: "Điệu nhảy xác ướp"
            },
            {
                value: "chong_day",
                text: "Chống đẩy"
            },
            {
                value: "dao_deu",
                text: "Đảo đều"
            },
            {
                value: "ngai_vang_chung_ket",
                text: "Ngai vàng chung kết"
            },
            {
                value: "thang_long_quyen",
                text: "Thăng long quyền"
            },
            {
                value: "tro_choi_nguy_hiem",
                text: "Trò chơi nguy hiểm"
            },
            {
                value: "vu_dieu_hoang_da",
                text: "Vũ điệu hoang dã"
            },
            {
                value: "de_doa",
                text: "Đe dọa"
            },
            {
                value: "lac",
                text: "Lắc"
            },
            {
                value: "buoc_di_cua_quy",
                text: "Bước đi của quỷ"
            },
            {
                value: "troi_sap",
                text: "Trời sập"
            },
            {
                value: "nguyet_cuoc",
                text: "Nguyệt cước"
            },
            {
                value: "lac_lu",
                text: "Lắc lư"
            },
            {
                value: "vu_dieu_chien_tran",
                text: "Vũ điệu chiến trận"
            },
            {
                value: "dap_tay",
                text: "Đập tay"
            },
            {
                value: "quay_tung_noc",
                text: "Quẩy tung nóc"
            },
            {
                value: "xoay_dien_cuong",
                text: "Xoay điên cuồng"
            }];

        const Modemotes = [{
            value: "lever",
            text: "Lever 100"
        },
            {
                value: "hopthelv",
                text: "Thần Ma"
            },
            {
                value: "tam_nang",
                text: "Tắm nắng"
            },
            {
                value: "thuc_thi_cong_ly",
                text: "Thực thi công lý"
            },
            {
                value: "ngoi",
                text: "Ngồi"
            },
            {
                value: "farafal",
                text: "FARAFAl Cuồng Long"
            },
            {
                value: "Xm8",
                text: "XM8 Lôi Con"
            },
            {
                value: "upmlv7",
                text: "UMP Phong Cách"
            },
            {
                value: "camco",
                text: "Cắm cờ"
            },
            {
                value: "Akrongxanh",
                text: "AK47 Rồng Xanh"
            },
            {
                value: "scarcamap",
                text: "SCAR Cá Mập"
            },
            {
                value: "mp40maxa",
                text: "MP40 Mãng Xà"
            },
            {
                value: "m1014ltlv7",
                text: "M1014 L.Tộc"
            },
            {
                value: "famalv7",
                text: "Famas Dạ coa"
            },
            {
                value: "mp40smlv7",
                text: "MP40 Sắc màu"
            },
            {
                value: "mp5lv7",
                text: "MP5 Thiên Thần"
            },
            {
                value: "m1014hlv7",
                text: "M1014 Huyết Hỏa"
            },
            {
                value: "m1887lv7",
                text: "M1887 Vũ Trụ"
            },
            {
                value: "gokienlv7",
                text: "Gõ Kiến Mãng hổ"
            },
            {
                value: "thomsonlv7",
                text: "Thomson Hắc Thạch"
            },
            {
                value: "gloralv7",
                text: "Glora Sắc Màu"
            },
            {
                value: "an94lv7",
                text: "AN94 Ác Quỷ"
            },
            {
                value: "m4a1lv7",
                text: "M4A1 Hỏa Ngục"
            },
            {
                value: "namdamlv7",
                text: "Long Chảo quyền"
            },
            {
                value: "luclv7",
                text: "G18 Chinh phục"
            },
            {
                value: "katalv7",
                text: "TM Kết Liễu"
            },   {
                value: "lai_lamborghini",
                text: "Lái lamborghini"
            },
                           {
        value: "bất_cần",
        text: "Bất cần"
    },
    {
        value: "cuc_quang_bung_no",
        text: "Cực quang bùng nổ"
    },
    {
        value: "tam_su",
        text: "Tâm sự"
    },
    {
        value: "thien_than_tung_canh",
        text: "Thiên thần tung cánh"
    },
    {
        value: "kha_que",
        text: "Khá quê"
    },
    {
        value: "nang_cup",
        text: "Nâng cúp"
    },
    {
        value: "yeu_hay_khong_yeu",
        text: "Yêu hay không yêu"
    },
    {
        value: "mua_keo",
        text: "Múa kéo"
    },
    {
        value: "dau_nay_so",
        text: "Đầu nảy số"
    },
    {
        value: "dem_nguoc",
        text: "Đếm ngược"
    },
    {
        value: "lac_hong",
        text: "Lắc hông"
    },
    {
        value: "co_vu_cuong_nhiet",
        text: "Cổ vũ cuồng nhiệt"
    },
    {
        value: "cu_nem_3_diem",
        text: "Cú ném 3 điểm"
    },
    {
        value: "rasengan",
        text: "Rasengan"
    },
    {
        value: "ngan_nam_dau_don",
        text: "Ngàn năm đau đớn"
    },
    {
        value: "ket_an_ninja",
        text: "Kết ấn ninja"
    },
    {
        value: "chay_kieu_ninja",
        text: "Chạy kiểu ninja"
    },
    {
        value: "phan_than_chi_thuat",
        text: "Phân thân chi thuật"
    },
                   { value: "vanluottulong",
    text: "ván lướt tử long"
},
{
    value: "dinhcuachop",
    text: "đỉnh của chóp"
},
{
    value: "muonbungchay",
    text: "muốn bùng cháy"
},
{
    value: "zo123",
    text: "(1,2,3 Zô)"
},
{
    value: "anmungphongcach",
    text: "ăn mừng phong cách"
},
{
    value: "xoaysung",
    text: "xoay súng"
},
{
    value: "khongphailo",
    text: "ko phải lo"
},
{
    value: "tranthu",
    text: "trấn thủ"
},
{
    value: "sadan",
    text: "sả đạn"
},
{
    value: "nedan",
    text: "né đạn"
},
{
    value: "duavoilua",
    text: "đùa với lửa"
},
{
    value: "camcophongcach",
    text: "cắm cờ phong cách"
},
{
    value: "rapchaysuon",
    text: "rap cháy sườn"
},
{
    value: "spatialawareness",
    text: "spatial awareness"
},
{
    value: "nagitrapping",
    text: "nagi trapping"
},
{
    value: "diankihung",
    text: "đi kiểu anh hùng"
},
{
    value: "naatunaatu",
    text: "Naatu Naatu"
},
                    
                           
            {
                value: "Racingboy7",
                text: "Racing Boy"
            },
            {
                value: "cuoiEch7",
                text: "Bắn Pháo"
            },
            {
                value: "cuoiBC7",
                text: "Cưỡi Bồn cầu"
            },
            {
                value: "caothust7",
                text: "Cao Thủ ST"
            },
            {
                value: "caothutc7",
                text: "Cao thủ TC"
            },
            {
                value: "lac_lu_dien_cuong",
                text: "Lắc lư điên cuồng"
            },
            {
                value: "ca_nhong",
                text: "Cà nhong"
            },
            {
                value: "vu_dieu_vit_vang",
                text: "Vũ điệu vịt vàng"
            },
            {
                value: "ban_la_nhat",
                text: "Bạn là nhất"
            },
            {
                value: "treu",
                text: "Trêu"
            },
            {
                value: "di_lui_moonwalk",
                text: "Đi lùi moonwalk"
            },
            {
                value: "chao_tang_hoa",
                text: "Chào, tặng hoa"
            },
            {
                value: "de_ta_can_no",
                text: "Để ta cắn nó"
            },
            {
                value: "cap_bap_benh",
                text: "Cặp Bập bênh"
            },
            {
                value: "ngoi_thien",
                text: "Ngồi thiền"
            },
            {
                value: "pha_daoe_tG_ao",
                text: "Phá đaoe tG ảo"
            },
            {
                value: "dap_xe_1B",
                text: "Đạp xe 1B"
            },
            {
                value: "re_song",
                text: "Rẽ sóng"
            },
            {
                value: "vac_cuu",
                text: "Vác cừu"
            },
            {
                value: "cap_ma_than_hop_the",
                text: "Cặp Ma thần hợp thể"
            },
            {
                value: "vo_tay_vo_tay",
                text: "Vỗ tay, vỗ tay"
            },
            {
                value: "khong_phai_ban",
                text: "Không phải bàn"
            },
            {
                value: "vay_canh",
                text: "Vẫy cánh"
            },
            {
                value: "hoa_zombie",
                text: "Hóa zombie"
            },
            {
                value: "tha_thinh",
                text: "Thả thính"
            },
            {
                value: "cap_doi_hoan_hao",
                text: "Cặp đôi hoàn hảo"
            },
            {
                value: "dau_bep",
                text: "Đầu bếp"
            },
            {
                value: "bung_du",
                text: "Bung dù"
            },
            {
                value: "cayyy",
                text: "Cayyy"
            },
         
            {
                value: "cap_phong_cach",
                text: "Cặp Phong cách"
            },
            {
                value: "lac_lac_cai_tay",
                text: "Lắc lắc cái tay"
            },
            {
                value: "bon_cau_tan_cong",
                text: "Bồn cầu tấn công"
            },
            {
                value: "lang_la",
                text: "Làng lá"
            },
            {
                value: "thuner_flash",
                text: "Thuner flash"
            },
            {
                value: "water_breathing",
                text: "Water breathing"
            },
            {
                value: "crazy_cutting",
                text: "Crazy cutting"
            },
            {
                value: "phi_kiem",
                text: "Phi kiếm"
            },
            {
                value: "mua_roi",
                text: "Múa rối"
            },
            {
                value: "khoi_suong",
                text: "Khói sương"
            },
            {
                value: "dap_tho",
                text: "Đập thỏ"
            },
            {
                value: "vu_dieu_quai_vat",
                text: "Vũ điệu quái vật"
            }];
        const actionToModElement = document.getElementById('actionToMod');
        const modActionElement = document.getElementById('modAction');

        emotes.forEach(emote => {
            const option = document.createElement('option');
            option.value = emote.value;
            option.textContent = emote.text;
            actionToModElement.appendChild(option);
        });

        Modemotes.forEach(emote => {
            const option = document.createElement('option');
            option.value = emote.value;
            option.textContent = emote.text;
            modActionElement.appendChild(option);
        });

        function showModOptions() {
            const selectedValue = actionToModElement.value;
            alert('Selected action: ' + selectedValue);
        }

        function showModOptions() {
            document.getElementById('actionChoice1').style.display = 'none';
            document.getElementById('actionChoice2').style.display = 'block';
        }
        function confirmAction() {
            var actionToMod = document.getElementById('actionToMod').value;
            var modAction = document.getElementById('modAction').value;
            searchAndReplace(values[actionToMod], values[modAction], 'I32');
            values[actionToMod] = values[modAction];
            console.log('Updated values:', values);
        }

        function goBack() {
            document.getElementById('actionChoice2').style.display = 'none';
            document.getElementById('actionChoice1').style.display = 'block';
        }
        
           const values = {
            chao: 909000001,
            cuoi: 909000002,
            khieu_khich: 909000003,
            vo_tay: 909000004,
            dab: 909000005,
            ga: 909000006,
            vay_tay: 909000007,
            ban_nhay: 909000008,
            baby_shark: 909000009,
            tang_hoa: 909000010,
            dieu_nhay_xac_uop: 909000011,
            chong_day: 909000012,
            dao_deu: 909000013,
            ngai_vang_chung_ket: 909000014,
            thang_long_quyen: 909000015,
            tro_choi_nguy_hiem: 909000016,
            vu_dieu_hoang_da: 909000017,
            de_doa: 909000018,
            lac: 909000019,
            buoc_di_cua_quy: 909000020,
            troi_sap: 909000021,
            nguyet_cuoc: 909000022,
            lac_lu: 909000023,
            vu_dieu_chien_tran: 909000024,
            dap_tay: 909000025,
            quay_tung_noc: 909000026,
            xoay_dien_cuong: 909000027,
            Xm8: 909000085,
            camco: 909000034,
            Akrongxanh: 909000063,
            scarcamap: 909000068,
            mp40maxa: 909000075,
            m1014ltlv7: 909000081,
            longvcl: 914042001,
            farafal: 909045001,
            upmlv7: 909000098,
            mp40smlv7: 909040010,
            mp5lv7: 909033002,
            m1014hlv7: 909039011,
            m1887lv7: 909035007,
            m4a1lv7: 909033001,
            acvcl: 914039001,
            quyvcl: 914038001,
            an94lv7: 909035012,
            namdamlv7: 909037011,
            luclv7: 909038012,
            thomsonlv7: 909038010,
            gokienlv7: 909042008,
            gloralv7: 909041005,
            katalv7: 909044015,
            Racingboy7: 909043009,
            cuoiEch7: 909045005,
            caccho: 914000003,
            kochim: 914000001,
            sieunhanxanh: 914000002,
            thanvcl: 914044001,
            cuoiBC7: 909043003,
            caothust7: 909041012,
            caothutc7: 909041013,
            lever: 909042007,
            hopthelv: 909044005,
            ngoi: 909043002,
            famalv7: 909000090,
            chao_bang: 907102505,
            ump_booyah: 907101623,
            thompson_thoi_dai: 907102510,
            thomson_canhcut: 907104056,
            m1014_bom_no: 907101922,
            m4a1_tri_tue: 907101722,
            mp40_bich_vang: 907191707,
            scar_dang_cap_titan: 907192509,
            an94_chien_tranh_do: 907103028,
            an94_chien_tranh_hong: 907103027,
            clong_quyen: 907104525,
            desert_thi_nhan: 907103120,
            m1887_hoa_no: 907103107,
            katana_than_ma: 907104405,
            nam_dam_hon_mang: 907300004,
            katana_hoa_lang: 907104146,
            xm8_ga_hoang_hot: 907104310,
            ump_chim_ung: 907104239,
            ump_khung_long: 907102711,
            m1014_shiba: 907136038,
            m1887_thuy_no: 907103108,
            mp5_tho_7_mau: 907103808,
            nam_dam_hx_tru: 907103536,
            kata_hon_the: 907104443,
            hoa_bang_quyen: 907104201,
            xich_quyen: 907103728,
            awm_hoa_banh: 907104222,
            awm_than_luc: 907102833,
            ak_hon_the_than_ma: 907104406,
            no_san_bien: 907101601,
            mp40_tia_chop: 907194208,
            groza_sac_mau: 907194117,
            m1014_hhoa: 907194108,
            g18_chinh_phuc: 907194007,
            thompson_hthach: 907193907,
            ac80_thien_yet: 907193807,
            farafal_clong: 907194517,
            ak_rong: 907292407,
            scar_ca_map: 907292507,
            mp40_mxa: 907292607,
            m1014_l_toc: 907192707,
            xm8_loi_than: 907192807,
            famas_d_doa: 907192907,
            ump_pcach: 907193007,
            m4a1_hoa_nguc: 907193107,
            mp5_thien_than: 907193307,
            m1887_vu_tru: 907193507,
            an94_ac_quy: 907193517,
            long_chao_quyen: 907193705,
            scar_xich_than_ma: 907193608,
            chim_go_kien_manh_ho: 907194217,
            thuc_thi_cong_ly: 909040008,
            tam_nang: 909036006,
            M4A1_canh_cut_t: 907104541,
            M4A1_canh_cut_X: 907104540,
            Thompson_C_cut: 907104056,
            Ak_Samurai: 907101407,
            M4a1_P_Xa: 907136054,
            Awm_P_Xa: 907136069,
            M1014_P_Xa: 907136039,
            Ak47_P_Xa: 907136050,
            UMP_P_Xa: 907136046,
            MP5_P_Xa: 907136044,
            Desert_P_Xa: 907136080,
            G18_P_Xa: 907136085,
            M14_P_Xa: 907136060,
            Scar_P_Xa: 907136051,
            Groza_P_Xa: 907136057,
            Mp40_P_Xa: 907136043,
            SkS_P_Xa: 907136067,
            Famas_P_Xa: 907136053,
            M500_P_Xa: 907136086,
            SVD_P_Xa: 907136066,
            XM8_P_Xa: 907136052,
            M60_P_Xa: 907136055,
            P90_P_Xa: 907136045,
            An94_P_Xa: 907136056,
            M1887_P_Xa: 907136040,
            Thomson_P_Xa: 907136047,
            M82B_P_Xa: 907136070,
            AUG_P_Xa: 907136058,
            Farafal_P_Xa: 907136059,
            CGK_P_Xa: 907136065,
            Vector_P_Xa: 907136048,
            Mag_7_P_Xa: 907136041,
            M1917_P_Xa: 907136082,
            UZi_P_Xa: 907136079,
            G36_P_Xa: 907136076,
            Sung_sac_P_Xa: 907136075,
            Mac10_P_Xa: 907136074,
            AC80_P_Xa: 907136068,
            PP90_P_Xa: 907136078,
            Trogon_P_Xa: 907103752,
            M1887_Lu_khach: 907103916,
            M60_linh_hoa: 907104409,
            AWM_than_luc: 907102833,
            Ao_Densho: 203043040,
            Quan_nghe_si: 204000884,
            Quan_Quy_than: 204039040,
            Desert_Anh_Sang: 907104227,
            M4A1_Binh_minh: 907104202,
            Mac10_Bang_tien: 907103212,
            ac80_tinh_van: 907104002,
            mp40_giai_dieu: 907103535,
            mag_7_xac_uop: 907104407,
            katana_hoa_lang: 907104146,
            luoi_hai_hac_van: 907103422,
            thompson_bach_cuoc: 907102915,
            m1014_titan: 907102105,
            du_hanh_sac_mau: 912040001,
            o_may_zing_got_chop: 909044007,
            hoa_bang_san_sang: 912042001,
            hoi_tho_cua_nuoc: 912041002,
            G36_quy_cot: 907136015,
            luoi_hai_than_ma: 907104422,
            p90_huy_diet: 907104408,
            AM_sac_to: 907136011,
            CBC_chet_choc: 907104429,
            cb_c_long: 203045006,
            desert_1_4: 907103913,
            katana_hoa_bang: 907104231,
            katana_huyet_nguyeth: 907101415,
            m14_ac_mong: 907104313,
vanluottulong: 909046001,
dinhcuachop: 909046002,
muonbungchay: 909046003,
zo123: 909046004,
anmungphongcach: 909046005,
xoaysung: 909046006,
khongphailo: 909046008,
tranthu: 909046009,
sadan: 909046010,
nedan: 909046011,
duavoilua: 909046012,
camcophongcach: 909046013,
rapchaysuon: 909046014,
spatialawareness: 909046015,
nagitrapping: 909046016,
diankihung: 909045017,
naatunaatu: 909045016,

            bo_dao_trich_do: 203000348,
            bo_dao_trich_tim: 203000349,
            bo_dao_trich_vang: 203000352,
            bo_dao_trich_xanh: 203000350,
            bo_dao_trich_xanh_la: 203000351,
            bo_dao_trich_ma: 203042013,
            bo_khung_long_cau_vong: 203000324,
            bo_khung_long_gorilla: 203000321,
            bo_khung_long_hoa_si: 203033050,
            bo_khung_long_huong: 203000323,
            bo_khung_long_minion: 203000322,
            bo_khung_long_tim: 203000320,
            bo_khung_long_xanh: 203000596,
            bo_khung_long_zilla: 203035056,
            bo_nguoi_xep_hinh: 203000490,
            bo_ninja_den: 203000204,
            bo_ninja_trang: 203000331,
            bo_saitama: 203000966,
            ao_cb_c_long: 203045006,
            ao_mac_dinh: 203000573,
            ao_tinh_yeu: 203000698,
            lac_lu_dien_cuong: 909045002,
            ca_nhong: 909045003,
            vu_dieu_vit_vang: 909045004,
            ban_la_nhat: 909045006,
            treu: 909045008,
            di_lui_moonwalk: 909045009,
            chao_tang_hoa: 909045010,
            de_ta_can_no: 909045011,
            cap_bap_benh: 909045012,
            ngoi_thien: 909045015,
            pha_daoe_tG_ao: 909044001,
            dap_xe_1B: 909044002,
            re_song: 909044003,
            vac_cuu: 909044004,
            cap_ma_than_hop_the: 909044005,
            vo_tay_vo_tay: 909044008,
            khong_phai_ban: 909044009,
            vay_canh: 909044011,
            hoa_zombie: 909044012,
            tha_thinh: 909043006,
            cap_doi_hoan_hao: 909043010,
            dau_bep: 909042001,
            bung_du: 909042002,
            cayyy: 909042004,
            lai_lamborghini: 909042012,
            cap_phong_cach: 909042013,
            lac_lac_cai_tay: 909042016,
            bon_cau_tan_cong: 909042017,
            lang_la: 909042018,
            thuner_flash: 909041001,
            water_breathing: 909041002,
            crazy_cutting: 909041003,
            phi_kiem: 909041004,
            mua_roi: 909041006,
            khoi_suong: 909041008,
            dap_tho: 909041010,
            vu_dieu_quai_vat: 909041014,
            ao_zipper_xam: 203000165,
            ao_thich_khanh: 203000543,
            ao_densho: 203043040,
            ao_duong_pho: 203000182,
            ao_trai_nho_ngao: 203001117,
            ao_ht_mua_2: 203000106,
            ao_who_your_oaooy: 203000205,
            ao_vm_hoang_kim: 203000983,
            ao_8_trang_duc: 203000195,
            ao_10_agentina: 203000192,
            ao_7_lam_vai_nhat: 203000190,
            ao_7_do_co_xanh_la: 203000189,
            ao_9_xanh_blue: 203000187,
            quan_tho_db_do: 204040029,
            quan_lang_tu: 204000859,
            quan_ke_soc: 204040042,
            quan_ngo_ngao: 204000769,
            quan_tham_hiem: 204000103,
            quan_saitama: 204000649,
            quan_thien_than: 204037037,
            quan_tinh_yeu: 204000437,
            quan_mac_dinh: 204000345,
            kinh_tho_db_do: 211040048,
            kinh_mat_na_chien_than: 211000847,
            kinh_mat_na_sung: 211000125,
            kinh_mat_na_bushido: 211000016,
            kinh_mat_na_ct_dung_nham: 211000847,
            mu_lang_khach: 211000303,
            mu_dau_tho_ac: 211000418,
            mu_dau_ngo_ngao: 211001035,
            giay_tho_db_do: 205040030,
            giay_saitama: 205000590,
            giay_tinh_yeu: 205000385,
            giay_mac_dinh: 205000299,
            mu_tinh_yeu: 211000490,
            kinh_tinh_yeu: 211000491,
                   bat_can: 909047001,
    cuc_quang_bung_no: 909047002,
    tam_su: 909047003,
    thien_than_tung_canh: 909047004,
    kha_que: 909047005,
    nang_cup: 909047006,
    yeu_hay_khong_yeu: 909047007,
    mua_keo: 909047008,
    dau_nay_so: 909047009,
    dem_nguoc: 909047010,
    lac_hong: 909047011,
    co_vu_cuong_nhiet: 909047012,
    cu_nem_3_diem: 909047013,
    rasengan: 909047015,
    ngan_nam_dau_don: 909047016,
    ket_an_ninja: 909047017,
    chay_kieu_ninja: 909047018,
    phan_than_chi_thuat: 909047019
        };
