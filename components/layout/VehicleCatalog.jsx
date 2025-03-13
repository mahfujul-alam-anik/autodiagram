"use client";

import { useEffect, useState } from "react";
import { vehicle_catalog } from "@/constant/vehicle_catalog";
import {
  Button,
  Select,
  SelectItem,
  Tab,
  Tabs,
  useDisclosure,
} from "@heroui/react";
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";
import CatalogStage from "../ui/CatalogStage";
import { GiSpeedometer } from "react-icons/gi";

const VehicleCatalog = () => {
  // Extract vehicle types (Cars, Bikes, Trucks)
  const vehicleTypes = Object.keys(vehicle_catalog[0].vehicle);

  const [selectedType, setSelectedType] = useState(vehicleTypes[0]); // Default: Cars
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedGeneration, setSelectedGeneration] = useState("");
  const [selectedEngine, setSelectedEngine] = useState(null);
  const [itemData, setItemData] = useState(null);
  const { onOpen, isOpen, onOpenChange } = useDisclosure();

  // Reset selections when switching vehicle type
  useEffect(() => {
    setSelectedBrand("");
    setSelectedModel("");
    setSelectedGeneration("");
    setSelectedEngine(null);
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

  // Search the stage data from selected value
  const handleSearch = () => {
    if (
      selectedType &&
      selectedBrand &&
      selectedModel &&
      selectedGeneration &&
      selectedEngine
    ) {
      const data =
        vehicleData.markalar[selectedBrand]?.modeller[selectedModel]?.[
          selectedGeneration
        ]?.[selectedEngine];
      console.log("data", data);

      setItemData(data);
      onOpen();
    }
  };

  return (
    <div className="flex w-full flex-col relative">
      {/* modal to show selected item data */}
      <CatalogStage
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        itemData={itemData}
      />

      <div className="text-slate-300 top-2 text-xl font-bold absolute right-0 flex-center gap-2">
        <FaArrowLeftLong /> Select Your Vehicle
      </div>

      <Tabs
        aria-label="Options"
        selectedKey={selectedType}
        onSelectionChange={setSelectedType}
        classNames={{
          tabList: "bg-slate-950 p-3 bg-opacity-60 backdrop-blur-md",
          cursor: "w-full bg-slate-900 text-white py-3 border border-slate-800",
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
            <div className="flex items-center w-full gap-3 selectBox border-slate-900 bg-slate-950 p-3 rounded-lg">
              {/* Brand Select */}
              <Select
                label="Select Brand"
                onChange={(e) => {
                  setSelectedBrand(e.target.value);
                  setSelectedModel(""); // Reset model
                  setSelectedGeneration(""); // Reset generation
                  setSelectedEngine(null); // Reset engine
                }}
                selectedKey={selectedBrand}
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
                }}
                selectedKey={selectedModel}
                isDisabled={!selectedBrand}
              >
                <SelectItem value="" isDisabled>
                  {selectedBrand ? "Select Model" : "Select Brand First"}
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
                }}
                selectedKey={selectedGeneration}
                isDisabled={!selectedModel}
              >
                <SelectItem value="" isDisabled>
                  {selectedModel ? "Select Generation" : "Select Model First"}
                </SelectItem>
                {generations.map((generation) => (
                  <SelectItem key={generation} value={generation}>
                    {generation}
                  </SelectItem>
                ))}
              </Select>

              {/* Engine Select */}
              <div className="autoWidthInValueBox w-[inherit]">
                <Select
                  label="Select Engine"
                  onChange={(e) => setSelectedEngine(e.target.value)}
                  selectedKey={selectedEngine}
                  isDisabled={!selectedGeneration}
                  classNames={{
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
              </div>

              {/* Search Button */}
              <div className=" w-[120px]">
                <Button
                  color="primary"
                  variant="solid"
                  className=" h-[55px] !bg-primary"
                  onPress={handleSearch}
                  isDisabled={!selectedEngine}
                  startContent={
                    <div className="w-5 h-5">
                      <GiSpeedometer className="text-lg text-white" />
                    </div>
                  }
                >
                  Check
                </Button>
              </div>
            </div>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default VehicleCatalog;
