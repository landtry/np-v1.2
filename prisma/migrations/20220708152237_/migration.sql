-- CreateTable
CREATE TABLE "Example" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Example_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "Entity" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "overall_progress" INTEGER DEFAULT 0,
    "number_of_employees" INTEGER DEFAULT 0,
    "contact_person" TEXT,
    "contact_email" TEXT,
    "company_website" TEXT,
    "desktop_os" TEXT,
    "server_os" TEXT,
    "workstation_antivirus" TEXT,
    "server_antivirus" TEXT,
    "anti_malware" TEXT,
    "application_blocking" TEXT,
    "web_content_filtering" TEXT,
    "web_proxy_server" TEXT,
    "edge_firewalls" TEXT,
    "internal_firewalls" TEXT,
    "dns_and_dhcp_services" TEXT,
    "client_vpn" TEXT,
    "multi_factor_authentication" TEXT,
    "personnel_management" TEXT,
    "identity_management" TEXT,
    "compliance_management" TEXT,
    "training" TEXT,
    "single_sign_on" TEXT,
    "account_password_vault" TEXT,
    "data_loss_prevention" TEXT,
    "inventory_management" TEXT,
    "vulnerability_scanning" TEXT,
    "file_integrity_management" TEXT,
    "data_governance" TEXT,
    "patching_windows" TEXT,
    "virtualization" TEXT,
    "configuration_management" TEXT,
    "database_management_system" TEXT,
    "remote_assisstance" TEXT,
    "email_server" TEXT,
    "anti_spam" TEXT,
    "helpdesk_incident_monitoring" TEXT,
    "siem_event_log_aggregation" TEXT,
    "event_log_monitoring" TEXT,
    "network_monitoring" TEXT,
    "load_balancer" TEXT,
    "web_server" TEXT,
    "web_application_firewall" TEXT,
    "development_story_bug_tracking" TEXT,
    "development_code_repository" TEXT,
    "remote_assistance" TEXT,
    "patching_everything_else" TEXT,

    CONSTRAINT "Entity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sme" (
    "id" TEXT NOT NULL,
    "entity_id" TEXT NOT NULL,
    "name" TEXT,
    "title" TEXT,

    CONSTRAINT "Sme_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Assessment" (
    "id" TEXT NOT NULL,
    "entity_id" TEXT NOT NULL,
    "name" TEXT,
    "standard" TEXT,
    "overall_progress" INTEGER DEFAULT 0,
    "overall_score" INTEGER DEFAULT 0,

    CONSTRAINT "Assessment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Changelog" (
    "id" TEXT NOT NULL,
    "assessment_id" TEXT,
    "user_id" TEXT,
    "user" TEXT,
    "updated_at" TIMESTAMP(3),
    "operation_action" TEXT,
    "operation_object" TEXT,
    "section_number" TEXT NOT NULL,

    CONSTRAINT "Changelog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Entity" ADD CONSTRAINT "Entity_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sme" ADD CONSTRAINT "Sme_entity_id_fkey" FOREIGN KEY ("entity_id") REFERENCES "Entity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assessment" ADD CONSTRAINT "Assessment_entity_id_fkey" FOREIGN KEY ("entity_id") REFERENCES "Entity"("id") ON DELETE CASCADE ON UPDATE CASCADE;
