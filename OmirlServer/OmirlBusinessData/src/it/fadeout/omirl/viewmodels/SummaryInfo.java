package it.fadeout.omirl.viewmodels;

import java.util.ArrayList;

import javax.persistence.Transient;

public class SummaryInfo {
	ArrayList<AlertZoneSummaryInfo> alertInfo = new ArrayList<>();
	ArrayList<DistrictSummaryInfo> districtInfo = new ArrayList<>();
	ArrayList<WindSummaryInfo> windInfo = new ArrayList<>();
	
	@Transient
	private
	String updateDateTime;
	
	public ArrayList<AlertZoneSummaryInfo> getAlertInfo() {
		return alertInfo;
	}
	public void setAlertInfo(ArrayList<AlertZoneSummaryInfo> alertInfo) {
		this.alertInfo = alertInfo;
	}
	public ArrayList<DistrictSummaryInfo> getDistrictInfo() {
		return districtInfo;
	}
	public void setDistrictInfo(ArrayList<DistrictSummaryInfo> districtInfo) {
		this.districtInfo = districtInfo;
	}
	public ArrayList<WindSummaryInfo> getWindInfo() {
		return windInfo;
	}
	public void setWindInfo(ArrayList<WindSummaryInfo> windInfo) {
		this.windInfo = windInfo;
	}
	public String getUpdateDateTime() {
		return updateDateTime;
	}
	public void setUpdateDateTime(String updateDateTime) {
		this.updateDateTime = updateDateTime;
	}
	
}
