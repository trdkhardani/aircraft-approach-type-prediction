-- CreateTable
CREATE TABLE "prediction_logs" (
    "prediction_log_id" TEXT NOT NULL,
    "prediction_log_airport_icao" CHAR(4),
    "prediction_log_visibility" DOUBLE PRECISION NOT NULL,
    "prediction_log_wind_speed" INTEGER NOT NULL,
    "prediction_log_wind_gust" INTEGER NOT NULL,
    "prediction_log_wind_direction" INTEGER NOT NULL,
    "prediction_log_rvr" CHAR(6) NOT NULL,
    "prediction_log_runway_designator_number" CHAR(2),
    "prediction_log_runway_designator_side" CHAR(1),
    "prediction_log_runway_ils_category" VARCHAR(20) DEFAULT 'None',
    "prediction_log_headwind" DOUBLE PRECISION NOT NULL,
    "prediction_log_crosswind" DOUBLE PRECISION NOT NULL,
    "prediction_log_ceiling" INTEGER NOT NULL,
    "prediction_log_weather_phenomenon" CHAR(6) NOT NULL,
    "prediction_log_ils_label" INTEGER NOT NULL,
    "prediction_log_rnav_label" INTEGER NOT NULL,
    "prediction_log_rnp_label" INTEGER NOT NULL,
    "prediction_log_visual_label" INTEGER NOT NULL,

    CONSTRAINT "prediction_logs_pkey" PRIMARY KEY ("prediction_log_id")
);

-- CreateTable
CREATE TABLE "prediction_inaccuracies" (
    "prediction_inaccuracy_id" TEXT NOT NULL,
    "prediction_log_id" TEXT NOT NULL,
    "prediction_inaccuracy_supposed_ils_label" INTEGER NOT NULL,
    "prediction_inaccuracy_supposed_rnav_label" INTEGER NOT NULL,
    "prediction_inaccuracy_supposed_rnp_label" INTEGER NOT NULL,
    "prediction_inaccuracy_supposed_visual_label" INTEGER NOT NULL,

    CONSTRAINT "prediction_inaccuracies_pkey" PRIMARY KEY ("prediction_inaccuracy_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "prediction_inaccuracies_prediction_log_id_key" ON "prediction_inaccuracies"("prediction_log_id");

-- AddForeignKey
ALTER TABLE "prediction_inaccuracies" ADD CONSTRAINT "prediction_inaccuracies_prediction_log_id_fkey" FOREIGN KEY ("prediction_log_id") REFERENCES "prediction_logs"("prediction_log_id") ON DELETE RESTRICT ON UPDATE CASCADE;
