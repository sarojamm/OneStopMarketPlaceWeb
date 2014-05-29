var baseurl = "";
function onLoadUrls() {

	var cctoollink = "/broadband/customerCareTool.html";
	var cctooltitle = "U-verse service trouble analysis tools for customer care agents";
	var quality_check_link = "/rgqualitycheck/rgqualitycheck.jsp";
	var quality_check_title = "Run this tool after RG/CPE in sync for install or repair ";
	var sai_check_link = "/LSLPA/realSaiCheck?first=true";
	var sai_check_title = "Use Meter to sync port at SAI and run this tool for installation and port change ";
	var sync_up_check_link = "/LSLPA/realSyncUpTest?first=true";
	var sync_up_check_title = "Use meter to sync port at either SAI, NID or any point in the loop, then run this tool ";
	var show_ref_link = "/lsbbt/showRF.jsp";
	var show_ref_title = "Detail historical performance check of local loop";
    var testhistory = "/TestHistory";
	var testhistory_title = "Search test history by BAN for key tools and parameters.";

//	var vdsl_line_check_link = "/rgqualitycheck/vdslcheck.jsp";
//	var vdsl_line_check_title = " Run this tool to check line side after RG in sync for install or repair  ";

	var port_admin_link = "/porttest/vradSearch.jsp";
	var port_admin_title = " Test locked ports by VRAD or BAN. ";

	var auto_meas_link ="/amtfi/amt_home.jsp";
	var auto_meas_title = "Only run this tool on lines which failed to sync.";

	var invent_alarm_check_link = "/LSLPA/dslamSearch.jsp";
	var invent_alarm_check_title = " Real time 7330 inventory and alarm check ";

	var real_time_lpa_link = "/LSLPA/realTimeLPA?first=true";
	var real_time_lpa_title = "Real time performance check of local loop";

	var nid_check_link = "/LSLPA/realNidCheck?first=true";
	var nid_check_title = "Use Meter to sync port at NID and run this tool";

	var fttp_loop_link = "/LSLPA/lslpa_home.jsp";
	var fttp_loop_title = "Real time performance check of FTTP loop";

	var msi_config_stb_link = "/cleanstb/cleanstb.jsp";
	var msi_config_stb_title = "Clean up misconfigured STB from G2/LDAP ";

	var auto_measur_link = "/amtfi/amt_home.jsp?amt_agree=yes";
	var auto_measur_title = "Retrieve last AMT Test Result";
//	="/amtfi/amt_home.jsp

//	var link1_2 = "/broadband/LFO_tools.html";
//	var title1_2 = "U-verse service install and repair tools for I&R technicians";
	var noclink = "/broadband/NocTools.html";
	var noctitle = "Tool suite for U-verse NOC";

//	var link1_4 = "/broadband/u-verseTool.html";
//	var title1_4 = "U-verse service install and repair tools for premises technicians";

	var link1_5 = "/mobile/index.jsp";
	var title1_5 = "This tool is for mobile devices to access, click to see the help file if you are interested. Please go to LSBBT home page for PC version ";

	var oldhome_link = "/broadband/index8.1.html";
	var oldhome_title = "Old LSBBT 8.1 home page";

	var link2_1 = "/wirelessap/wirelessap.jsp";
	var title2_1 = "Real time check of wireless network";

	var link3_1 = "/stbstats/STBClient2Search.jsp";
	var title3_1 = "IPTV Audio/Video historical performance (Client 2.0).";

	var link3_2 = "/MotoPlayer/index.jsp";
	var title3_2 = "Search STB MotoPlayer test results by BAN or STB GUID";
	var cpe_real_link = "/rgrealtime/rgstats.jsp";
	var cpe_real_title = "Real time check of CPE WAN and LAN Stats";
	
	var trouble_analysis_link = "/lsbbt/troubleAnalysis.jsp";
	var trouble_analysis_title = "Historical performance check. Run this tool for repair ";

	var trouble_ana_tool_link = "/lsbbt/troubleAnalysis.jsp";
	var trouble_ana_tool_title = "Historical performance check of VDSL loop and home network ";

	
	var cpe_histo_link = "/lsbbt/rgSummary.jsp";
	var cpe_histo_title = "CPE historical stats WAN and LAN ";

	var test_track_link = "/testsetTracking/index.jsp";
	var test_track_title = "Track testset firmware and test results by BAN, tech ID or serialnumber";


	var cVoIP_link = "/cvoipprovision/cvoipprovision.jsp";
	var cVoIP_title = "Create or Delete CVoIP account on CMS ";

	var hist_trend_7330_link = "/lsbbt/trending.jsp";
	var hist_trend_7330_title = "7330 historical performance trending  ";

	var err_summary_7330_link = "/lsbbt/dslam.jsp";
	var err_summary_7330_title = "7330 historical error summary drill down ";

	var hist_trend_link = "/lstrending/cpeTrending.jsp";
	var hist_trend_title = " Trending of user selected DSLAM and CPE stats ";

	var ont_activ_link = "/ontact_tool/actont_home.jsp";
	var ont_activ_title = " Activation of BPON U-verse ONT, BPON DialTone ONT, EGPON SFU etc.  ";

	var selt_link = "/SELT/selt_home.jsp";
	var selt_title = " VRAD intrusive SELT testing. ";

	var bond_link  ="/BondingTestTool/bt_home.jsp";
	var bond_title = " Pair bonding test tool for failed installs. ";

	var neig_line_link = "/lsbbt/neighborBanAction.do?selection=dslam";
	var neig_line_title = "Check customers on the same neighborhood";

	var mult_ban_link = "/lsbbt/banSearch.jsp";
	var mult_ban_title = "Search multiple BAN stats and info.";

	var puma_link = "/lsbbt/predictorAction.do";
	var puma_title = "Proactive U-verse Maintenance Analysis Tool.";

	var vrad_link = "/lsbbt/vradRankingAction.do";
	var vrad_title = "VRAD ranking based on MABR.";

	var sam_real_link = "/samrealtime/samstats.jsp";
	var sam_real_title = "Near real time check of 7x50 port stats end to end";

	var end_t0_end_link = "/lsbbt/etoeAction.do";
	var end_t0_end_title = " End to end network stats and info";
	var report_link = "/broadband/downloadBatchReport.html";
	var report_title = "Regular report files for download.";
	var about_link = "/documents/about.html";
	var about_title = "Background information about LSBBT";

	var release_info_link = "/broadband/release_info.html";
	var release_info_title = "New features, enhancements, and schedule of each release over history.";

	var swap_rg_link = "/lsbbt/swapLookup.jsp";
	var swap_rg_title = "Check history of port swap and RG swap for a customer .";

	var mult_ban_commo_link = "/lsbbt/commonality.jsp";
	var mult_ban_commo_title = "Enter multi-BANs to search end to end commonality.";
	
//	var auto_meas2_title ="Automated Measurement / M3 Tool - Only run this tool on lines which failed to sync.";
//	
//	var instal_report_link = "http://fsprd323.ffdc.sbc.com/Report/reportfile?home=lsbbt.sbc.com&bpath=/lsbbt/batch_reports/vdsl/dayone_install";
//	var instal_report_title = "This link provides daily reports of performance assessment for all complete installs on a day. Day one data is used in the assessment ";
	
	var online_docs_link = "/documents/BBT_document.html";
	var online_docs_title = "Online documents for each tool including User Guide, Help Page, Tutorial Materials etc.";
	
	var intrusivetesttooltitle ="These tools are intrusive  and interrupt customer U-verse service during testing.  Testing is logged and monitored.";

//	BBT_document.html    
	var celink ="/broadband/ceTools.html";
	var cetitle="Tools for Construction & Engineering.";
	
	var cimlink ="/broadband/cimTools.html";
	var cimtitle="Tools for Core Installation and Maintenance engineers.";
	
	var ufolink ="/broadband/ufoTools.html";
	var ufotitle="U-verse service install and repair tools for premises technicians in U-verse Field Operations.";
	
	setLinks("link1_1", ufolink, ufotitle);
	setLinks("link1_2", cimlink, cimtitle);
	setLinks("link1_3", celink, cetitle);
	setLinks("link1_4", cctoollink, cctooltitle);
	setLinks("link1_5", noclink, noctitle);
	  
	
	setLinks("link1_1_1", trouble_ana_tool_link, trouble_ana_tool_title);
	setLinks("link1_1_2", quality_check_link, quality_check_title);
	
	setLinks("link1_1_3", fttp_loop_link, fttp_loop_title);
	setLinks("link1_1_4", msi_config_stb_link, msi_config_stb_title);
	setLinks("link1_1_5", auto_measur_link, auto_measur_title);

	setLinks("link1_3_1",  swap_rg_link, swap_rg_title);
	setLinks("link1_3_2", mult_ban_commo_link, mult_ban_commo_title);
	setLinks("link1_3_3", cVoIP_link, cVoIP_title);
	setLinks("link1_3_4", cpe_real_link, cpe_real_title);	
	setLinks("link1_3_5", sam_real_link, sam_real_title);	
	
	
	setLinks("link1.1_1_1", real_time_lpa_link, real_time_lpa_title);
	setLinks("link1.1_1_2", quality_check_link, quality_check_title);
 	setLinks("link1.1_1_3", link2_1, title2_1);	
	setLinks("link1.1_1_4", cpe_real_link, cpe_real_title);	
	setLinks("link1.1_1_5", link3_1, title3_1);		
	setLinks("link1.1_1_6", nid_check_link, nid_check_title);	
	setLinks("link1.1_1_7", sai_check_link, sai_check_title);
	setLinks("link1.1_1_8", selt_link, selt_title);
	setLinks("link1.1_1_9", fttp_loop_link, fttp_loop_title);	
	setLinks("link1.1_1_10", auto_meas_link, auto_meas_title);	
	setLinks("link1.1_1_11", trouble_ana_tool_link, trouble_ana_tool_title);	
	setLinks("link1.1_1_12", bond_link, bond_title);
	setLinks("link1.1_1_12.1", neig_line_link, neig_line_title);	  
	setLinks("link1.1_1_13", err_summary_7330_link, err_summary_7330_title);
	setLinks("link1.1_1_14", testhistory, testhistory_title);	
	setLinks("link1.1_1_15", link1_5, title1_5);
	

	setLinks("link1.1_2_1", sai_check_link, sai_check_title);
	setLinks("link1.1_2_2", nid_check_link, nid_check_title);	
	setLinks("link1.1_2_3", sync_up_check_link, sync_up_check_title);	
	setLinks("link1.1_2_4", real_time_lpa_link, real_time_lpa_title);
	setLinks("link1.1_2_4.1",  quality_check_link, quality_check_title);
	
	setLinks("link1.1_2_5", cpe_real_link, cpe_real_title);	
	setLinks("link1.1_2_6", selt_link, selt_title);	
	setLinks("link1.1_2_7", fttp_loop_link, fttp_loop_title);	
	setLinks("link1.1_2_8", auto_meas_link, auto_meas_title);	
	setLinks("link1.1_2_9", trouble_ana_tool_link, trouble_ana_tool_title);	
	setLinks("link1.1_2_10", bond_link, bond_title);	
	setLinks("link1.1_2_11",  neig_line_link, neig_line_title);	
	setLinks("link1.1_2_12", err_summary_7330_link, err_summary_7330_title);
	setLinks("link1.1_2_13", testhistory, testhistory_title);	
	
//	//=============================================
	
	setLinks("link1.1_3_1",  real_time_lpa_link, real_time_lpa_title);
	setLinks("link1.1_3_2",  port_admin_link, port_admin_title);
	setLinks("link1.1_3_3",  neig_line_link, neig_line_title);
	setLinks("link1.1_3_4",  mult_ban_link, mult_ban_title);
	setLinks("link1.1_3_5",  invent_alarm_check_link, invent_alarm_check_title);
//	// RG links
	  setLinks("link2_1", link2_1, title2_1);	
	setLinks("link3_1", link3_1, title3_1);
	setLinks("link3_2", link3_2, title3_2);	
	setLinks("link4_1", quality_check_link, quality_check_title);
	setLinks("link4_2", cpe_real_link, cpe_real_title);
	setLinks("link4_3", trouble_analysis_link, trouble_analysis_title);
	setLinks("link4_4", cpe_histo_link, cpe_histo_title);
	setLinks("link4_6", hist_trend_link, hist_trend_title);
	setLinks("link4_7", testhistory, testhistory_title);
	
	// FTTN and  FTTP links
	
	setLinks("link5_1_1", real_time_lpa_link, real_time_lpa_title);
	setLinks("link5_1_2", sai_check_link, sai_check_title);
	setLinks("link5_1_3", nid_check_link, nid_check_title);
	setLinks("link5_1_4", invent_alarm_check_link, invent_alarm_check_title);

	setLinks("link5_2_1", show_ref_link, show_ref_title);
	setLinks("link5_2_2", hist_trend_7330_link, hist_trend_7330_title);
	setLinks("link5_2_3", err_summary_7330_link, err_summary_7330_title);
	setLinks("link5_2_4", hist_trend_link, hist_trend_title);
	setLinks("link5_2_5", puma_link, puma_title);
	setLinks("link5_2_6", vrad_link, vrad_title);
	setLinks("link5_2_7", testhistory, testhistory_title);
//	
	
	setLinks("link5_3_1", selt_link, selt_title);
	setLinks("link5_3_2", bond_link, bond_title);
	setLinks("link5_3_3", auto_meas_link, auto_meas_title);
	setLinks("link5_3_4", ont_activ_link, ont_activ_title);
	setLinks("link5_3_5", port_admin_link, port_admin_title);//	
	setLinks("link5_4_1", neig_line_link, neig_line_title);
	setLinks("link5_4_2", mult_ban_link, mult_ban_title);
	
	setLinks("link6_1", sam_real_link, sam_real_title);
	
	setLinks("link7_1", end_t0_end_link, end_t0_end_title);
	setLinks("link7_2", sam_real_link, sam_real_title);
	setLinks("link7_3", mult_ban_link, mult_ban_title);
	
	
	setLinks("link8_1", report_link, report_title);
	
	
	setLinks("link10_1", test_track_link, test_track_title);
	setLinks("link11_1", cVoIP_link, cVoIP_title);
	
	setLinks("link5_3","#", intrusivetesttooltitle);
	setLinks("maplink5_3","#", intrusivetesttooltitle);

	setLinks("maplink2_1", link2_1, title2_1);
	
	setLinks("maplink3_1", link3_1, title3_1);
	setLinks("maplink3_2", link3_1, title3_1);	
	
	setLinks("maplink6_1_1", sam_real_link, sam_real_title);
	setLinks("maplink6_1_2", sam_real_link, sam_real_title);
	setLinks("maplink6_1_3", sam_real_link, sam_real_title);
	setLinks("maplink6_1_4", sam_real_link, sam_real_title);
	setLinks("maplink6_1_5", sam_real_link, sam_real_title);
	
	setLinks("maplink7_1", real_time_lpa_link, real_time_lpa_title);
	setLinks("maplink7_2", ont_activ_link, ont_activ_title);
	setLinks("maplink7_3", mult_ban_link, mult_ban_title);
	setLinks("maplink7_4", testhistory, testhistory_title);
	
	
	setLinks("maplink3_3", link3_2, title3_2);	
//	setLinks("maplink5_3", "#", title3_2);	
	setLinks("maplink4_1_1", quality_check_link, quality_check_title);
	setLinks("maplink4_1_2", cpe_real_link, cpe_real_title);
	setLinks("maplink4_1_3", trouble_ana_tool_link, trouble_ana_tool_title);
	setLinks("maplink4_1_4", cpe_histo_link, cpe_histo_title);
	//setLinks("maplink4_1_5", test_track_link, test_track_title);
	setLinks("maplink4_1_6", hist_trend_link, hist_trend_title);
	//setLinks("maplink4_1_7", cVoIP_link, cVoIP_title);
	setLinks("maplink4_1_8", testhistory, testhistory_title);
	
	
	setLinks("maplink4_2_1", quality_check_link, quality_check_title);
	setLinks("maplink4_2_2", cpe_real_link, cpe_real_title);
	setLinks("maplink4_2_3", trouble_ana_tool_link, trouble_ana_tool_title);
	setLinks("maplink4_2_4", cpe_histo_link, cpe_histo_title);
	//setLinks("maplink4_2_5", test_track_link, test_track_title);
	setLinks("maplink4_2_6", hist_trend_link, hist_trend_title);
	//setLinks("maplink4_2_7", cVoIP_link, cVoIP_title);
	setLinks("maplink4_2_8", testhistory, testhistory_title);
//	
	
	setLinks("maplink5_1_1", real_time_lpa_link, real_time_lpa_title);
	setLinks("maplink5_1_2", sai_check_link, sai_check_title);
	setLinks("maplink5_1_3", nid_check_link, nid_check_title);
	setLinks("maplink5_1_4", invent_alarm_check_link, invent_alarm_check_title);

	setLinks("maplink5_2_1", show_ref_link, show_ref_title);
	setLinks("maplink5_2_2", hist_trend_7330_link, hist_trend_7330_title);
	setLinks("maplink5_2_3", err_summary_7330_link, err_summary_7330_title);
	setLinks("maplink5_2_4", hist_trend_link, hist_trend_title);
	setLinks("maplink5_2_5", puma_link, puma_title);
	setLinks("maplink5_2_6", vrad_link, vrad_title);
	setLinks("maplink5_2_7",  testhistory, testhistory_title);
	
	
	setLinks("maplink5_3_1", selt_link, selt_title);
	setLinks("maplink5_3_2", bond_link, bond_title);
	setLinks("maplink5_3_3", auto_meas_link, auto_meas_title);
	setLinks("maplink5_3_5", port_admin_link, port_admin_title);//	
	
	setLinks("maplink5_4_1", neig_line_link, neig_line_title);
	setLinks("maplink5_4_2", mult_ban_link, mult_ban_title);
	
	setLinks2("link9_1", about_link, about_title);
	setLinks2("link9_2", release_info_link, release_info_title);
	setLinks2("link9_3", online_docs_link, online_docs_title);
	setLinks2("link9_5", oldhome_link, oldhome_title);
	
//	=====================================================


}
var testbaseurl = "";

function setLinks2(att, linkin, titlein) {
	document.getElementById(att).href = testbaseurl + linkin;
	document.getElementById(att).title = titlein;

}
function setLinks(att, linkin, titlein) {
	document.getElementById(att).href = baseurl + linkin;
	document.getElementById(att).title = titlein;

}
