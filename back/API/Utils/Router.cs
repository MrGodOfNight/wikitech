namespace API.Utils
{
    public static class Router
    {
        public static IEndpointRouteBuilder Builder { get; set; }
        public static void Registrator(IEndpointRouteBuilder builder)
        {
            Builder = builder;
        }
    }
}
