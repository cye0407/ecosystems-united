// ============================================
// Output: ResponseReady ESGCompanyData format
// ============================================
/**
 * Convert extraction results to ResponseReady flat data format.
 * Returns a partial object — only fields that were extracted.
 */
export function toResponseReadyData(result) {
    const data = {};
    for (const field of result.fields) {
        const val = typeof field.value === 'number' ? field.value : undefined;
        if (val === undefined)
            continue;
        switch (field.field) {
            case 'electricityKwh':
                data.electricityKwh = val;
                break;
            case 'renewablePercent':
                data.renewablePercent = val;
                break;
            case 'naturalGasKwh':
                // ResponseReady expects m3, not kWh - convert (1 m3 ~= 10.5 kWh)
                data.naturalGasM3 = Math.round(val / 10.5);
                break;
            case 'waterM3':
                data.waterM3 = val;
                break;
            case 'totalWasteKg':
                data.totalWasteKg = val;
                break;
            case 'hazardousWasteKg':
                data.hazardousWasteKg = val;
                break;
            case 'dieselLiters':
                data.dieselLiters = val;
                break;
            case 'recyclingRate':
                data.recyclingPercent = val;
                break;
            case 'totalEmployees':
                data.employeeCount = val;
                break;
            case 'femalePercent':
                data.femalePercent = val;
                break;
        }
    }
    return data;
}
//# sourceMappingURL=responseReady.js.map