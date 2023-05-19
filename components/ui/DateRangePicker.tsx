import React, { useState } from "react";
import {
  DateRangePicker as DatePicker,
  DateRangePickerValue,
} from "@tremor/react";
import { useRecoilState } from "recoil";
import { DateRangeState } from "@/utils/date-range.atom";
const DateRangePicker = () => {
  const [value, setValue] = useRecoilState(DateRangeState);
  return (
    <DatePicker
      className="max-w-md mx-auto"
      value={value}
      onValueChange={setValue}
      dropdownPlaceholder="Select"
    />
  );
};

export default DateRangePicker;
