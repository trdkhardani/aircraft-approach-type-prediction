-- AlterTable
CREATE SEQUENCE atis_rvr_id_seq;
ALTER TABLE "atis_rvr" ALTER COLUMN "id" SET DEFAULT nextval('atis_rvr_id_seq');
ALTER SEQUENCE atis_rvr_id_seq OWNED BY "atis_rvr"."id";
