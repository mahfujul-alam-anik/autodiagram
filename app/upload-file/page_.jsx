"use client";

import { useEffect, useState } from "react";
import { vehicle_catalog } from "@/constant/vehicle_catalog";
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Input,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  Tab,
  Tabs,
  Textarea,
  useDisclosure,
} from "@heroui/react";
import Image from "next/image";
import React from "react";
import Main from "@/components/layout/Main";
import { SectionTitle } from "@/components/ui/SectionTitle";
import {
  gearTypes,
  manufactureYears,
  tools,
  tuningOptions,
  workTypes,
} from "@/constant/car_info";
import DragNDropUpload from "@/components/layout/DragNDropUpload";
import { FiUploadCloud } from "react-icons/fi";
import FileCartModal from "@/components/ui/FileCartModal";

const UploadFilePage = () => {
  // Extract vehicle types (Cars, Bikes, Trucks)
  const vehicleTypes = Object.keys(vehicle_catalog[0].vehicle);

  const [selectedType, setSelectedType] = useState(vehicleTypes[0]); // Default: Cars
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedGeneration, setSelectedGeneration] = useState("");
  const [selectedEngine, setSelectedEngine] = useState(null);
  const [selectedEcu, setSelectedEcu] = useState(null);
  const [itemData, setItemData] = useState(null);
  const [selectedTools, setSelectedTools] = useState("");
  const [gearType, setGearType] = useState("");
  const [manufactureYear, setManufactureYear] = useState("");
  const [tuningType, setTuningType] = useState("");
  const [carInDyno, setCarInDyno] = useState(null);
  const { onOpen, isOpen, onOpenChange } = useDisclosure();

  console.log("tuningType", tuningType);

  // Reset selections when switching vehicle type
  useEffect(() => {
    setSelectedBrand("");
    setSelectedModel("");
    setSelectedGeneration("");
    setSelectedEngine(null);
    setSelectedEcu(null);
    setItemData(null);
  }, [selectedType]);

  const vehicleData = vehicle_catalog[0].vehicle[selectedType];

  const brands = Object.keys(vehicleData.markalar || {});

  const models = selectedBrand
    ? Object.keys(vehicleData.markalar[selectedBrand]?.modeller || {})
    : [];
  const generations = selectedModel
    ? Object.keys(
        vehicleData.markalar[selectedBrand]?.modeller[selectedModel] || {}
      )
    : [];
  const engines = selectedGeneration
    ? Object.keys(
        vehicleData.markalar[selectedBrand]?.modeller[selectedModel][
          selectedGeneration
        ] || {}
      )
    : [];
  const ecu = selectedEngine
    ? vehicleData.markalar[selectedBrand]?.modeller[selectedModel]?.[
        selectedGeneration
      ]?.[selectedEngine]?.ecuType || []
    : [];

  // Handle the upload system
  const handleUpload = () => {
    onOpen();
  };

  return (
    <Main>
      <div>
        <section className="">
          <div className="">
            <div className="bg-slate-300 bg-opacity-10 backdrop-blur-md p-5 pb-6 rounded-lg col-flex gap-6 backdrop-brightness-150 backdrop-contrast-125">
              <div>
                <SectionTitle title={`Select your specifications`} />
                <div className="flex w-full flex-col relative pt-3">
                  <Tabs
                    aria-label="Options"
                    selectedKey={selectedType}
                    onSelectionChange={setSelectedType}
                    classNames={{
                      tabList: "bg-slate-950 p-3 backdrop-blur-md",
                      cursor:
                        "w-full bg-slate-900 text-white py-3 border border-slate-800",
                      tab: "text-slate-200 py-5 px-4",
                      tabContent:
                        "group-data-[selected=true]:text-white text-slate-400 py-3 px-0",
                    }}
                  >
                    {vehicleTypes.map((type) => (
                      <Tab
                        className=""
                        key={type}
                        title={
                          <div className="flex items-center justify-center gap-3">
                            <Image
                              src={`/images/${type.toLowerCase()}-icon.png`}
                              alt={type}
                              width={60}
                              height={40}
                              className="w-[40px] h-auto max-h-[27px]"
                            />
                            <span>{type}</span>
                          </div>
                        }
                      >
                        <div className="flex items-center w-full gap-2 selectBox border-slate-900">
                          {/* Brand Select */}
                          <Select
                            label="Select Brand"
                            onChange={(e) => {
                              setSelectedBrand(e.target.value);
                              setSelectedModel(""); // Reset model
                              setSelectedGeneration(""); // Reset generation
                              setSelectedEngine(null); // Reset engine
                              setSelectedEcu(null); // Reset ecu
                            }}
                            selectedKey={selectedBrand}
                            size="md"
                            classNames={{
                              label: "!text-slate-400 text-xs",
                            }}
                          >
                            <SelectItem value="" isDisabled>
                              Select Brand
                            </SelectItem>
                            {brands.map((brand) => (
                              <SelectItem key={brand} value={brand}>
                                {brand}
                              </SelectItem>
                            ))}
                          </Select>

                          {/* Model Select */}
                          <Select
                            label="Select Model"
                            onChange={(e) => {
                              setSelectedModel(e.target.value);
                              setSelectedGeneration(""); // Reset generation
                              setSelectedEngine(null); // Reset engine
                              setSelectedEcu(null); // Reset ecu
                            }}
                            selectedKey={selectedModel}
                            isDisabled={!selectedBrand}
                            size="md"
                            classNames={{
                              label: "!text-slate-400 text-xs",
                            }}
                          >
                            <SelectItem value="" isDisabled>
                              {selectedBrand
                                ? "Select Model"
                                : "Select Brand First"}
                            </SelectItem>
                            {models.map((model) => (
                              <SelectItem key={model} value={model}>
                                {model}
                              </SelectItem>
                            ))}
                          </Select>

                          {/* Generation Select */}
                          <Select
                            label="Select Generation"
                            onChange={(e) => {
                              setSelectedGeneration(e.target.value);
                              setSelectedEngine(null); // Reset engine
                              setSelectedEcu(null); // Reset ecu
                            }}
                            selectedKey={selectedGeneration}
                            isDisabled={!selectedModel}
                            size="md"
                            classNames={{
                              label: "!text-slate-400 text-xs",
                            }}
                          >
                            <SelectItem value="" isDisabled>
                              {selectedModel
                                ? "Select Generation"
                                : "Select Model First"}
                            </SelectItem>
                            {generations.map((generation) => (
                              <SelectItem key={generation} value={generation}>
                                {generation}
                              </SelectItem>
                            ))}
                          </Select>

                          {/* Engine Select */}
                          <Select
                            label="Select Engine"
                            onChange={(e) => {
                              setSelectedEngine(e.target.value);
                              setSelectedEcu(null); // Reset ecu
                            }}
                            selectedKey={selectedEngine}
                            isDisabled={!selectedGeneration}
                            size="md"
                            classNames={{
                              label: "!text-slate-400 text-xs",
                              popoverContent: "!w-auto",
                            }}
                          >
                            <SelectItem value="" isDisabled>
                              {selectedGeneration
                                ? "Select Engine"
                                : "Select Generation First"}
                            </SelectItem>
                            {engines.map((engine) => (
                              <SelectItem key={engine} value={engine}>
                                {engine}
                              </SelectItem>
                            ))}
                          </Select>

                          {/* ECU Select */}
                          <Select
                            label="Select ECU Type"
                            onChange={(e) => setSelectedEcu(e.target.value)}
                            selectedKey={selectedEcu}
                            isDisabled={!selectedEngine}
                            size="md"
                            classNames={{
                              label: "!text-slate-400 text-xs",
                              popoverContent: "!w-auto",
                            }}
                          >
                            <SelectItem value="" isDisabled>
                              {selectedEngine
                                ? "Select ECU Type"
                                : "Select Engine First"}
                            </SelectItem>
                            {ecu &&
                              ecu.map((ecu) => (
                                <SelectItem key={ecu} value={ecu}>
                                  {ecu}
                                </SelectItem>
                              ))}
                          </Select>
                        </div>
                      </Tab>
                    ))}
                  </Tabs>
                </div>
              </div>

              <div>
                <SectionTitle title={`Car Information`} />
                <div className="selectBox pt-3 px-1 flex gap-2">
                  <div className="col-flex gap-2 w-full">
                    {/* License Plate */}
                    <Input
                      label={`License Plate or VIN`}
                      size="md"
                      classNames={{
                        input: "!text-slate-300",
                        inputWrapper: "!bg-slate-900 text-slate-200",
                        label: "!text-slate-400 text-xs",
                      }}
                    />
                    {/* Select Tool */}
                    <Select
                      label="Select a Tool"
                      onChange={(e) => setSelectedTools(e.target.value)}
                      selectedKey={selectedTools}
                      size="md"
                      classNames={{
                        label: "!text-slate-400 text-xs",
                        popoverContent: "!w-auto",
                      }}
                    >
                      <SelectItem value="" isDisabled>
                        Select Tool
                      </SelectItem>
                      {tools.map((tool) => (
                        <SelectItem key={tool.value} value={tool.value}>
                          {tool.label}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                  <div className="col-flex gap-2 w-full">
                    {/* HP Engine Power (optional) */}
                    <Input
                      label={`HP Engine Power (optional)`}
                      size="md"
                      classNames={{
                        input: "!text-slate-300",
                        inputWrapper: "!bg-slate-900 text-slate-200",
                        label: "!text-slate-400 text-xs",
                      }}
                    />
                    {/* Gear Type */}
                    <Select
                      label="Select Gearbox Type"
                      onChange={(e) => setGearType(e.target.value)}
                      selectedKey={gearType}
                      size="md"
                      classNames={{
                        label: "!text-slate-400 text-xs",
                      }}
                    >
                      <SelectItem value="" isDisabled>
                        Select Type
                      </SelectItem>
                      {gearTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.value}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                  <div className="col-flex gap-2 w-full">
                    {/* Vehicle Kilometer */}
                    <Input
                      label={`Vehicle Kilometer`}
                      size="md"
                      classNames={{
                        input: "!text-slate-300",
                        inputWrapper: "!bg-slate-900 text-slate-200",
                        label: "!text-slate-400 text-xs",
                      }}
                    />
                    {/* Manufacture Year */}
                    <Select
                      label="Manufacture Year"
                      onChange={(e) => setManufactureYear(e.target.value)}
                      selectedKey={manufactureYear}
                      size="md"
                      classNames={{
                        label: "!text-slate-400 text-xs",
                      }}
                    >
                      <SelectItem value="" isDisabled>
                        Select Year
                      </SelectItem>
                      {manufactureYears.map((year) => (
                        <SelectItem key={year.value} value={year.value}>
                          {year.value}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                </div>
              </div>

              <div>
                <SectionTitle title={`Tuning Information`} />
                <div className="selectBox pt-3 px-1 flex gap-2">
                  {/* Select Tuning Type */}
                  <Select
                    label="Select Tuning Type"
                    onChange={(e) => setTuningType(e.target.value)}
                    selectedKey={tuningType}
                    size="md"
                    classNames={{
                      label: "!text-slate-400 text-xs",
                    }}
                  >
                    <SelectItem value="" isDisabled>
                      Select Type
                    </SelectItem>
                    {workTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {`${type.label} (${type.tokens} Euro)`}
                      </SelectItem>
                    ))}
                  </Select>

                  {/* car in Dyno? */}
                  <Select
                    label="Is your car in Dyno?"
                    onChange={(e) => setCarInDyno(e.target.value)}
                    selectedKey={carInDyno}
                    size="md"
                    classNames={{
                      label: "!text-slate-400 text-xs",
                    }}
                  >
                    <SelectItem value="" isDisabled>
                      Select answer
                    </SelectItem>
                    <SelectItem key={1} value={true}>
                      Yes
                    </SelectItem>
                    <SelectItem key={2} value={false}>
                      No
                    </SelectItem>
                  </Select>

                  {/* if car in dyno then show the upload box */}
                  {carInDyno == true && (
                    <Input
                      label={`Upload result file`}
                      size="md"
                      type="file"
                      classNames={{
                        input: "!text-slate-300",
                        inputWrapper: "!bg-slate-900 text-slate-200",
                        label: "!text-slate-400 text-xs",
                      }}
                      className="dark"
                    />
                  )}
                </div>
              </div>

              {/* tuning options - if selected any value - conditional render*/}
              {tuningType &&
                !["original", "stage_1", "mappack"].includes(tuningType) && (
                  <div className="text-slate-400 flex gap-4">
                    <CheckboxGroup
                      orientation="horizontal"
                      label="Choose additional options that you want us to do"
                      classNames={{
                        label: "!text-slate-200",
                      }}
                      size="sm"
                    >
                      {tuningOptions.map((item) => (
                        <Checkbox
                          key={item.value}
                          className="px-4"
                          value={item.value}
                        >
                          {item.label}
                        </Checkbox>
                      ))}
                    </CheckboxGroup>
                  </div>
                )}

              <div>
                {/* file upload and details */}
                <SectionTitle title={`Upload File`} />
                <div className="selectBox pt-3 px-1 flex gap-3">
                  <div className="w-1/2">
                    <DragNDropUpload />
                  </div>
                  <div className="w-1/2 h-full">
                    <Textarea
                      label={`Enter extra information`}
                      size="md"
                      classNames={{
                        input: "!text-slate-300",
                        inputWrapper: "!bg-slate-900 text-slate-200",
                        label: "!text-slate-400 text-xs",
                      }}
                      minRows={4}
                    />
                  </div>
                </div>
              </div>

              {/* If application stage in out of working hour, show this*/}
              <div className="w-full selectBox">
                <div className="text-slate-200 col-flex pb-3">
                  We are currently outside working hours.
                  <span className="text-[11px] !text-slate-400">
                    *If you want the file to be done immediately, select "Yes"
                    for 2 Euro.
                  </span>
                  <span className="text-[11px] !text-slate-400">
                    *If you want the file to be done during working hours,
                    select "No".
                  </span>
                </div>
                <div>
                  <RadioGroup label="" orientation="horizontal">
                    <Radio value="Yes">Yes (+2 Euro)</Radio>
                    <Radio value="No" className="ml-3">
                      No
                    </Radio>
                  </RadioGroup>
                </div>
              </div>

              {/* Upload Button */}
              <div className="flex-end w-full">
                <div className=" w-[140px]">
                  <Button
                    color="primary"
                    variant="solid"
                    className=" h-[55px] !bg-primary w-full"
                    onPress={handleUpload}
                    // isDisabled={!selectedEngine}
                    startContent={
                      <div className="w-5 h-5">
                        <FiUploadCloud className="text-lg text-white" />
                      </div>
                    }
                  >
                    Upload
                  </Button>
                </div>
                {/* modal to show selected item data */}
                <FileCartModal
                  isOpen={isOpen}
                  onOpenChange={onOpenChange}
                  itemData={itemData}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Main>
  );
};

export default UploadFilePage;
