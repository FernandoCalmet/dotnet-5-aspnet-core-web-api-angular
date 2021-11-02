/****** Developed by: Fernando Calmet Ramirez <fercalmet@gmail.com> ******/
IF NOT EXISTS(SELECT * FROM sys.databases WHERE name = 'StudentDB')
BEGIN
	CREATE DATABASE [StudentDB]
END
GO
USE [StudentDB]
GO

CREATE TABLE [dbo].[Student] (
    [StudentId] int IDENTITY(1,1) NOT NULL,
    [FullName] nvarchar(max) NULL,
    [Class] nvarchar(max) NULL
);

INSERT INTO [dbo].[Student] VALUES ('Fernando Calmet', 'Computing');
INSERT INTO [dbo].[Student] VALUES ('Andres Ramírez','Math');