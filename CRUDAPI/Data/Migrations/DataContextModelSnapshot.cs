﻿// <auto-generated />
using CRUDAPI.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace CRUDAPI.Data.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "5.0.9");

            modelBuilder.Entity("CRUDAPI.Models.Pessoa", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("CNPJ")
                        .HasColumnType("TEXT");

                    b.Property<int>("CodigoProjeto")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Endereco")
                        .HasColumnType("TEXT");

                    b.Property<string>("NomeCompleto")
                        .HasColumnType("TEXT");

                    b.Property<string>("NomeProjeto")
                        .HasColumnType("TEXT");

                    b.Property<double>("ValorProjeto")
                        .HasColumnType("REAL");

                    b.HasKey("Id");

                    b.ToTable("Pessoa");
                });
#pragma warning restore 612, 618
        }
    }
}